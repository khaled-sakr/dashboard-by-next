import { useState } from "react";
import { useOutsideClick } from "@/context/OutSideClick";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { db } from "@/lib/firebaseConfig";
import { useRouter } from "next/router";
import { useConFast } from "@/context/ContextProject";
import Button from "@/components/Button";
import ErrorInput from "@/components/ErrorInput";

const styleInput =
  " w-[70%] ml-2 col-span-1 w-full rounded-md sm:px-9 px-2 py-0 xs:py-[2px] outline-none text-stone-600";
const label =
  " xs:w-[20%] w-[25%]  md:text-base text-xs sm:text-sm md:font-bold font-base xs:font-semibold mb-1 xs:mb-0";
const container = " flex flex-col  xs:flex-row text-stone-800";
function Modal({ setOpenedModal }) {
  const { defaultValuesEmp, dataEmp, setDataEmp, currentId, setCurrentId } =
    useConFast();
  const add = currentId === "" || dataEmp === defaultValuesEmp ? "Add" : "Edit";
  const router = useRouter();
  const { pathname, query } = router;
  const [errors, setErrors] = useState([]);
  const ref = useOutsideClick(() => {
    setOpenedModal(false);
    setDataEmp(defaultValuesEmp);
    setCurrentId("");
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDataEmp({ ...dataEmp, [name]: value });
  };
  const addItem = async (data) => {
    try {
      await addDoc(collection(db, "employees"), data);
      delete query.paramToRemove;
      router.push({
        pathname,
        query,
      });
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };
  const validate = () => {
    const newErrors = [];
    if (!dataEmp.name) newErrors.push("This name is required");
    if (!dataEmp.job) newErrors.push("This job is required");
    if (!dataEmp.phone) newErrors.push("This phone is required");
    if (!dataEmp.salary) newErrors.push("This salary is required");
    if (!dataEmp.hour) newErrors.push("This hour is required");
    return newErrors;
  };
  const editFun = async (id) => {
    try {
      await updateDoc(doc(db, "employees", id), dataEmp);
      delete query.paramToRemove;
      router.push({
        pathname,
        query,
      });
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };
  const handleSubmit = (e) => {
    const validationErrors = validate();
    e.preventDefault();
    if (add === "Add") {
      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
      } else {
        setErrors({});
        addItem(dataEmp);
        setOpenedModal(false);
        setDataEmp(defaultValuesEmp);
      }
    } else {
      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
      } else {
        setErrors({});
        editFun(currentId);
        setOpenedModal(false);
        setCurrentId("");
        setDataEmp(defaultValuesEmp);
      }
    }
  };

  return (
    <div className="overlay overflow-scroll scroll ">
      <form
        onSubmit={handleSubmit}
        ref={ref}
        className="xl:w-[60%] w-[80%] bg-stone-300 opacity-95 rounded-3xl px-12 py-10  h-fit mx-auto mt-8 mb-8 "
      >
        <Button
          onClick={() => setOpenedModal(() => false)}
          type="danger"
          addStyle=" -mt-5 -mr-4 "
        >
          X
        </Button>
        <div className="flex flex-col gap-8 mt-14 mb-4 justify-center ">
          <div className={container}>
            <label className={label}>Job</label>

            <input
              type="text"
              name="job"
              className={`${styleInput}`}
              value={dataEmp.job}
              onChange={handleChange}
              placeholder={`Please Enter Your Job...`}
            />
            {errors.includes("This job is required") && (
              <ErrorInput error={"This job is required"} />
            )}
          </div>
          <div className={container}>
            <label className={label}>Name</label>

            <input
              type="text"
              name="name"
              placeholder={`Please Enter Your Name..`}
              className={styleInput}
              value={dataEmp.name}
              onChange={handleChange}
            />
            {errors.includes("This name is required") && (
              <ErrorInput error={"This name is required"} />
            )}
          </div>
          <div className={container}>
            <label className={label}>Hour</label>
            <input
              className={styleInput}
              name="hour"
              type="number"
              value={dataEmp.hour}
              onChange={handleChange}
              placeholder={`Please Enter Your Work  Hour...`}
            />
            {errors.includes("This hour is required") && (
              <ErrorInput error={"This hour is required"} />
            )}
          </div>
          <div className={container}>
            <label className={label}>Salary</label>
            <input
              className={styleInput}
              name="salary"
              type="number"
              value={dataEmp.salary}
              onChange={handleChange}
              placeholder={`Please Enter Your Salary...`}
            />
            {errors.includes("This salary is required") && (
              <ErrorInput error={"This salary is required"} />
            )}
          </div>
          <div className={container}>
            <label className={label}>Phone</label>
            <input
              className={styleInput}
              name="phone"
              type="number"
              value={dataEmp.phone}
              onChange={handleChange}
              placeholder={`Please Enter Your Phone...`}
            />
            {errors.includes("This phone is required") && (
              <ErrorInput error={"This phone is required"} />
            )}
          </div>
          <div
            className={`${container} xs:justify-start justify-between gap-5`}
          >
            <label className="md:text-xl text-md font-semibold sm:mr-10 mr-0 ">
              Confirmed
            </label>
            <input
              className="xl:w-7 sm:w-5 w-4 xs:h-6 h-5 bg-red-500  "
              type="checkbox"
              name="confirm"
              checked={Boolean(dataEmp.confirm)}
              onChange={handleChange}
              disabled={dataEmp.confirm}
            />
          </div>
          <div className="py-0">
            <input
              type="submit"
              className="px-6 sm:py-[2.5px] py-1 rounded-md  cursor-pointer text-stone-100 text-center float-right text-xs sm:text-base md:text-lg bg-sky-900 hover:bg-sky-950 sm:font-semibold font-base shad"
              value={add}
            />
            <Button
              addStyle="hidden sm:block"
              type="danger"
              onClick={() => {
                setOpenedModal(false);
                setDataEmp(defaultValuesEmp);
              }}
            >
              Cancle
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Modal;
