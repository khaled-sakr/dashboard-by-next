import { useConFast } from "@/context/ContextProject";
import { useOutsideClick } from "@/context/OutSideClick";
import { db } from "@/lib/firebaseConfig";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { useState } from "react";
import { useRouter } from "next/router";
import Button from "./Button";
import ErrorInput from "./ErrorInput";

const styleInput =
  " w-[70%] ml-2 col-span-1 w-full rounded-md sm:px-9 px-2 py-0 xs:py-[2px] outline-none ";
const label =
  " xs:w-[20%] w-[25%]  md:text-base text-xs sm:text-sm md:font-bold font-base xs:font-semibold mb-1 xs:mb-0";
const container = " flex flex-col  xs:flex-row text-stone-800";

function Modal2({ setOpenedModal2 }) {
  const router = useRouter();
  const {
    openedModal2,
    setCurrentData,
    defaultValuesInc,
    dataInc,
    setDataInc,
    currentId,
    setCurrentId,
  } = useConFast();
  const add = currentId === "" || dataInc === defaultValuesInc ? "Add" : "Edit";
  const { pathname, query } = router;
  const [errors, setErrors] = useState([]);
  const ref = useOutsideClick(() => {
    setOpenedModal2(false);
    setDataInc(defaultValuesInc);
    setCurrentId("");
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDataInc({ ...dataInc, [name]: value });
  };
  const addItem = async (data) => {
    try {
      await addDoc(collection(db, "incomes"), data);
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
    if (!dataInc.company) newErrors.push("This company is required");
    if (!dataInc.dealer) newErrors.push("This dealer is required");
    if (!dataInc.packages) newErrors.push("This packages is required");
    if (!dataInc.phone) newErrors.push("This phone is required");
    if (!dataInc.date) newErrors.push("This date is required");
    if (!dataInc.benefit) newErrors.push("This benefit is required");
    return newErrors;
  };
  const editFun = async (id) => {
    try {
      await updateDoc(doc(db, "incomes", id), dataInc);
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
    e.preventDefault();
    if (add === "Add") {
      const validationErrors = validate();
      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
      } else {
        setErrors({});
        addItem(dataInc);
        setOpenedModal2(false);
        setDataInc(defaultValuesInc);
      }
    } else {
      const validationErrors = validate();
      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
      } else {
        editFun(currentId);
        setOpenedModal2(false);
        setCurrentId("");
        setDataInc(defaultValuesInc);
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
          onClick={() => setOpenedModal2(() => false)}
          type="danger"
          addStyle=" -mt-5 -mr-4 "
        >
          X
        </Button>
        <div className="flex flex-col gap-8 mt-14 mb-4 justify-center ">
          <div className={container}>
            <label className={label}>Company</label>

            <input
              type="text"
              name="company"
              className={`${styleInput}`}
              value={dataInc.company}
              onChange={handleChange}
              placeholder={`Please Enter Your company...`}
            />
            {errors.includes("This company is required") && (
              <ErrorInput error={"This company is required"} />
            )}
          </div>
          <div className={container}>
            <label className={label}>Name</label>

            <input
              type="text"
              name="dealer"
              placeholder={`Please Enter Your Name..`}
              className={styleInput}
              value={dataInc.dealer}
              onChange={handleChange}
            />
            {errors.includes("This dealer is required") && (
              <ErrorInput error={"This dealer is required"} />
            )}
          </div>
          <div className={container}>
            <label className={label}>packages</label>
            <input
              className={styleInput}
              name="packages"
              type="number"
              value={dataInc.packages}
              onChange={handleChange}
              placeholder={`Please Enter Your Work packages...`}
            />
            {errors.includes("This packages is required") && (
              <ErrorInput error={"This packages is required"} />
            )}
          </div>
          <div className={container}>
            <label className={label}>benefit</label>
            <input
              className={styleInput}
              name="benefit"
              type="number"
              value={dataInc.benefit}
              onChange={handleChange}
              placeholder={`Please Enter Your benefit...`}
            />
            {errors.includes("This benefit is required") && (
              <ErrorInput error={"This benefit is required"} />
            )}
          </div>
          <div className={container}>
            <label className={label}>phone</label>
            <input
              className={styleInput}
              // disabled={isLoading}
              name="phone"
              type="number"
              value={dataInc.phone}
              onChange={handleChange}
              placeholder={`Please Enter Your phone...`}
            />
            {errors.includes("This phone is required") && (
              <ErrorInput error={"This phone is required"} />
            )}
          </div>
          <div className={container}>
            <label className={label}>data</label>
            <input
              className={styleInput}
              name="date"
              type="date"
              value={dataInc.data}
              onChange={handleChange}
              placeholder={`Please Enter Your data...`}
            />
            {errors.includes("This date is required") && (
              <ErrorInput error={"This data is required"} />
            )}
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
                setOpenedModal2(false);
                setDataInc(defaultValuesInc);
              }}
            >
              Cancle
            </Button>
          </div>
        </div>
      </form>
    </div>
    // <div className={`overlay overflow-scroll scroll`}>
    //   <form
    //     onSubmit={handleSubmit(onSubmit)}
    //     ref={ref}
    //     className="xl:w-[60%] w-[80%] bg-stone-300 opacity-95 rounded-3xl px-12 py-10  h-fit mx-auto mt-8 mb-8 "
    //   >
    //     <div className="pb-9">
    //       <Button
    //         type="danger"
    //         addStyle=" -mt-5 -mr-4 "
    //         onClick={() => setOpenedModal2(false)}
    //       >
    //         X
    //       </Button>
    //     </div>
    //     <div className="flex flex-col gap-8 mt-14 mb-4 justify-center ">
    //       <div className={container}>
    //         <label className={label}>Company</label>

    //         <input
    //           type="text"
    //           disabled={isLoading}
    //           className={`${styleInput}`}
    //           placeholder={`please enter your company...`}
    //           {...register("company", { required: "the company is required" })}
    //         />
    //         <ErrorInput message={errors?.company?.message} />
    //       </div>
    //       <div className={container}>
    //         <label className={label}>Dealer</label>

    //         <input
    //           type="text"
    //           disabled={isLoading}
    //           placeholder={`please enter your dealer...`}
    //           className={styleInput}
    //           {...register("dealer", {
    //             required: "the dealer is required",
    //           })}
    //         />
    //         <ErrorInput message={errors?.dealer?.message} />
    //       </div>
    //       <div className={container}>
    //         <label className={label}>Packages</label>
    //         <input
    //           disabled={isLoading}
    //           className={styleInput}
    //           type="number"
    //           placeholder={`please enter your packages...`}
    //           {...register("packagess", { required: "the packages is required" })}
    //         />
    //         <ErrorInput message={errors?.packagess?.message} />
    //       </div>
    //       <div className={container}>
    //         <label className={label}>Benefit</label>
    //         <input
    //           disabled={isLoading}
    //           className={styleInput}
    //           type="number"
    //           placeholder={`please enter your benefit...`}
    //           {...register("benefit", {
    //             required: "the benefit is required",
    //           })}
    //         />
    //         <ErrorInput message={errors?.benefit?.message} />
    //       </div>
    //       <div className={container}>
    //         <label className={label}>Phone</label>
    //         <input
    //           disabled={isLoading}
    //           className={styleInput}
    //           type="number"
    //           placeholder="please enter your phone..."
    //           {...register("phone", {
    //             required: "the phone is required",
    //           })}
    //         />
    //         <ErrorInput message={errors?.phone?.message} />
    //       </div>
    //       <div className={container}>
    //         <label className={label}>Date</label>
    //         <input
    //           disabled={isLoading}
    //           className={styleInput}
    //           type="date"
    //           {...register("date", { required: "the date is required" })}
    //         />
    //         <ErrorInput message={errors?.date?.message} />
    //       </div>
    //     </div>
    //     <div className="py-5">
    //       <input
    //         type="submit"
    //         className="cursor-pointer text-stone-100 text-center float-right text-xs sm:text-base md:text-lg bg-sky-900 hover:bg-sky-950 sm:font-semibold font-base shad px-6 sm:py-[2.5px] py-1 rounded-md   font-base shad"
    //         value={add ? "Add" : "Edit"}
    //       />
    //       {/* <Button
    //         type="add"
    //         onClick={handleSubmit(onSubmit)}
    //         addStyle="px-6 sm:py-[2.5px] py-1 rounded-md"
    //       >
    //         {add ? "Add" : "Edit"}
    //       </Button> */}
    //       <Button
    //         addStyle="hidden sm:block"
    //         type="danger"
    //         onClick={() => setOpenedModal2(false)}
    //       >
    //         Cancle
    //       </Button>
    //     </div>
    //   </form>
    // </div>
  );
}

export default Modal2;
