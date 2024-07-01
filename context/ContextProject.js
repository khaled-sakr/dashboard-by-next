// import { collection, onSnapshot, query } from "firebase/firestore";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import { createContext, useContext, useState } from "react";
// import { db } from "../services/firebase";
// import { formatDate } from "./date";
import { db } from "@/lib/firebaseConfig";
import { formatDate } from "./date";
// import { formatDate } from "./date";
const ContextProjectPro = createContext();
//
const defaultValuesEmp = {
  name: "",
  job: "",
  salary: "",
  hour: "",
  confirm: false,
  phone: "",
};
const defaultValuesInc = {
  company: "",
  dealer: "",
  packages: "",
  benefit: "",
  phone: "",
  date: "",
};

function ContextProject({ children }) {
  //
  const [openedModal, setOpenedModal] = useState(false);
  const [openedModal2, setOpenedModal2] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [dataInc, setDataInc] = useState(defaultValuesInc);
  const [dataEmp, setDataEmp] = useState(defaultValuesEmp);
  const [currentData, setCurrentData] = useState([]);
  const [currentId, setCurrentId] = useState("");
  const [lastPageEmp, setLastPageEmp] = useState(
    dataEmp && Math.floor(dataEmp.length / 6) + 1
  );
  // const [lastPageInc, setLastPageInc] = useState(
  //   dataInc && Math.floor(dataInc.length / 6) + 1
  // );
  const [pageInc, setPageInc] = useState(1);
  const [pageEmp, setPageEmp] = useState(1);
  const today = formatDate(new Date());
  const pageSize = 4;
  //////////////////////////////
  async function AddItem(data, type) {
    setIsLoading(true);
    await addDoc(
      collection(db, `${type === "incomes" ? "incomes" : "employees"}`),
      data
    );
    setIsLoading(false);
  }
  ///delete Item
  function deleteItem(type, id) {
    deleteDoc(doc(db, `${type === "employees" ? "employees" : "incomes"}`, id));
  }
  //update data
  async function updateItem(data, type) {
    await updateDoc(doc(db, type, currentId), data);
  }

  return (
    <ContextProjectPro.Provider
      value={{
        defaultValuesInc,
        defaultValuesEmp,
        updateItem,
        deleteItem,
        AddItem,
        openedModal,
        setOpenedModal,
        openedModal2,
        setOpenedModal2,
        isLoading,
        setIsLoading,
        isError,
        setIsError,
        dataInc,
        setDataInc,
        dataEmp,
        setDataEmp,
        deleteItem,
        AddItem,
        updateItem,
        currentData,
        setCurrentData,
        currentId,
        setCurrentId,
        today,
        pageInc,
        setPageInc,
        pageEmp,
        setPageEmp,
        pageSize,
        lastPageEmp,
        setLastPageEmp,
        // lastPageInc,
        // setLastPageInc,
      }}
    >
      {children}
    </ContextProjectPro.Provider>
  );
}
function useConFast() {
  const context = useContext(ContextProjectPro);
  // if (context === undefined)
  //   throw new Error("PostContext was used outside of the PostProvider");
  return context;
}
export { ContextProject, useConFast };
