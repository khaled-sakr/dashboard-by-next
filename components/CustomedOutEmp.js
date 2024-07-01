import UnconfirmEmp from "./UnconfirmEmp";

function CustomedOutEmp({ data }) {
  const dataEmpUnConf = data.filter((item) => !item.confirm);
  return (
    <>
      <span className="shad flex flex-col md:mx-auto mx-0 mt-6 text-centermx-auto  text-center w-3/6 md:w-[49%] h-[250px] bg-stone-300  rounded-[40px] p-5 text-2xl ">
        <div className="sm:text-xl text-lg font-semibold text-stone-700 mx-auto p-0 h-fit   pb-1 w-full">
          Unconfirmed Employees
        </div>
        <div className=" overflow-y-scroll scroll">
          {dataEmpUnConf.map((item) => (
            <UnconfirmEmp key={item.id} item={item.name} />
          ))}
        </div>
      </span>
    </>
  );
}

export default CustomedOutEmp;
