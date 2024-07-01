import Head from "next/head";
import { getApps, initializeApp } from "firebase/app";
import { db, firebaseConfig } from "@/lib/firebaseConfig";
import { collection, getDocs, getFirestore, query } from "firebase/firestore";
import { useConFast } from "@/context/ContextProject";
import Modal from "@/components/Modal";
import TableEmp from "@/components/TableEmp";
import Button from "@/components/Button";
export async function getStaticProps() {
  const propsDB = !getApps().length
    ? db
    : getFirestore(initializeApp(firebaseConfig));
  const res = await getDocs(query(collection(propsDB, "employees")));
  return {
    props: {
      dataEmp: res.docs.map((doc) => ({ ...doc.data(), id: doc.id })),
    },
  };
}
function Employees({ dataEmp }) {
  const { openedModal, setOpenedModal, setCurrentData } = useConFast();
  return (
    <>
      {/* <Sort withData="employees" />
      <Filter withData="employees" addStyle="sm:px-6 px-0" /> */}
      <Head>
        <title>employees// Vanilla Co</title>{" "}
        <link rel="icon" href=".\public\images1.png" />
      </Head>
      {openedModal && (
        <Modal setOpenedModal={setOpenedModal} openedModal={openedModal} />
      )}
      <>
        <div className="grid grid-cols-12 text-center mx-4 mt-20 xs:text-sm md:text-xl text-[9px] sm:text-base font-normal sm:font-semibold text-black ">
          <span className="col-span-2 border-r border-gray-500">Job Title</span>
          <span className="col-span-2 border-r border-gray-500">Confirm</span>
          <span className="col-span-2 border-r border-gray-500">Name</span>
          <span className="col-span-1 border-r border-gray-500 px-auto">
            Hour
          </span>
          <span className="col-span-2 border-r border-gray-500">Salary</span>
          <span className="col-span-2 ">Phone</span>
        </div>
        <TableEmp data={dataEmp} />
        <div className="mr-6">
          <Button
            onClick={() => {
              setOpenedModal(true);
              setCurrentData([]);
            }}
            type="add"
            addStyle="mr-6 md:px-9 px-6 sm:py-2 py-1 sm:mr-4 mr-9 "
          >
            Add Employee
          </Button>
        </div>
      </>
    </>
  );
}

export default Employees;
// export { getStaticProps };
