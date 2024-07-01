import { useConFast } from "@/context/ContextProject";
import { useOutsideClick } from "@/context/OutSideClick";
import { db } from "@/lib/firebaseConfig";
import { deleteDoc, doc } from "firebase/firestore";
import { useRouter } from "next/router";
import { useState } from "react";
function ThreeDot({ type, idItem, dataDeal, dataEmp }) {
  const router = useRouter();
  const { pathname, query } = router;
  const [openOption, setOpenOption] = useState(false);
  const {
    setOpenedModal2,
    setOpenedModal,
    setDataInc,
    setDataEmp,
    defaultValuesEmp,
    defaultValuesInc,
    setCurrentId,
  } = useConFast();
  const deleteItem = async (id) => {
    try {
      await deleteDoc(doc(db, type, id));
      setDataEmp(defaultValuesEmp);
      setDataInc(defaultValuesInc);
      delete query.paramToRemove;
      router.push({
        pathname,
        query,
      });
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };
  const editFun = async (id) => {
    type === "employees" ? setOpenedModal(true) : setOpenedModal2(true);
    type === "employees"
      ? setDataEmp(
          { ...dataEmp, confirm: Boolean(confirm) } ? dataEmp : defaultValuesEmp
        )
      : setDataInc(dataDeal ? dataDeal : defaultValuesInc);
    setCurrentId(id);
  };
  const ref = useOutsideClick(() => {
    setOpenOption(false);
    setCurrentId("");
  });
  return (
    <span ref={ref}>
      <button
        className="cursor-pointer"
        onClick={() => {
          setOpenOption((e) => !e);
          setDataEmp(defaultValuesEmp);
          setDataInc(defaultValuesInc);
        }}
      >
        •••
      </button>
      {openOption && (
        <div className="absolute sm:right-4 md:-top-[60px] sm:-top-10 -top-7 right-0  bg-red-700 text-blue-100 rounded-lg  after:bg-slate-300 after:h-3 after:w-3 after:right-4">
          <button
            className="block m-auto rounded-t-lg hover:bg-red-800 sm:w-40 w-20"
            onClick={() => {
              editFun(idItem);
              setOpenOption(false);
            }}
          >
            edit
          </button>
          <button
            onClick={() => {
              setDataEmp(defaultValuesEmp);
              setDataInc(defaultValuesInc);
              setOpenOption(false);
              deleteItem(idItem);
            }}
            className="block m-auto rounded-b-lg hover:bg-red-800  w-full "
          >
            delete
          </button>
        </div>
      )}
    </span>
  );
}

export default ThreeDot;
