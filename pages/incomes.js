import Button from "@/components/Button";
// import TableDeal from "@/components/TableDeal";
import { firebaseConfig, db } from "@/lib/firebaseConfig";
import { getApps, initializeApp } from "firebase/app";
import { collection, getDocs, getFirestore, query } from "firebase/firestore";
// import TableDeal from "@/components/TableDeal";
import Head from "next/head";
import TableInc from "./incomes/TableInc";
import { useConFast } from "@/context/ContextProject";
import Modal2 from "@/pages/incomes/Modal2";

async function getStaticProps() {
  const propsDB = !getApps().length
    ? db
    : getFirestore(initializeApp(firebaseConfig));
  const res = getDocs(query(collection(propsDB, "incomes")));
  return {
    props: {
      dataInc: (await res).docs.map((doc) => ({ ...doc.data(), id: doc.id })),
    },
  };
}
function Incomes({ dataInc }) {
  const { openedModal2, setOpenedModal2, setCurrentData } = useConFast();
  return (
    <>
      {/* <Sort withData="incomes" addStyle=" xs:text-xs text-center" />
      <Filter withData="incomes" addStyle="sm:px-9 px-3 " /> */}
      <Head>
        <title>incomes// Vanilla Co</title>{" "}
        <link rel="icon" href=".\public\images1.png" />
      </Head>
      {openedModal2 && <Modal2 setOpenedModal2={setOpenedModal2} />}

      <div className="grid grid-cols-13 text-center mx-4 mt-20 xs:text-sm md:text-xl text-[9px] sm:text-base font-normal sm:font-semibold text-stone-900 ">
        <span className="col-span-2 border-r border-gray-500">Company</span>
        <span className="col-span-2 border-r border-gray-500">Deal Date</span>
        <span className="col-span-2 border-r border-gray-500">Dealer</span>
        <span className="col-span-2 border-r border-gray-500">package</span>

        <span className="col-span-2 border-r border-gray-500">benefit</span>
        <span className="col-span-2 ">Phone</span>
      </div>
      <TableInc
        data={dataInc}
        // type="incomes"
      />
      {/* <TableDeal data={data} type="incomes" /> */}
      <div className="mr-6">
        <Button
          onClick={() => {
            setOpenedModal2(true);
            setCurrentData([]);
          }}
          type="add"
          addStyle=" mr-6 rounded-lg md:px-9 px-6 sm:py-2 py-1 sm:mr-4 mr-9 "
        >
          Add Deal
        </Button>
      </div>
    </>
  );
}

export default Incomes;
export { getStaticProps };
