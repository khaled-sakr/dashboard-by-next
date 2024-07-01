import { kFormatter } from "@/context/date";
import { MdAttachMoney, MdOutlineAssignmentInd } from "react-icons/md";
function StaticEmployees({ data }) {
  const totalSalries = data
    ?.map((item) => +item.salary)
    ?.reduce((acc, cur) => acc + cur, 0);
  const totalEmployees = data?.length;

  return (
    <>
      <span className=" shad flex p-2 flex-col m-0 md:m-auto text-center w-56 h-52 mr-4 bg-stone-300 rounded-[70px] mb-6 ">
        <span className="rounded-full  text-5xl  p-3 mt-3  mx-auto text-stone-700 bg-violet-400">
          <MdOutlineAssignmentInd />
        </span>
        <span className="text-sm text-stone-700 my-auto ml-3  ">
          Total Employees
          <div className="text-3xl">{kFormatter(totalEmployees)} </div>
        </span>
      </span>
      <span className=" shad flex p-2 flex-col m-0 md:m-auto  text-center w-56 h-52 mr-4 bg-stone-300 rounded-[70px] mb-6  ">
        <span className="rounded-full text-5xl  p-3 mt-3 mx-auto text-stone-700 bg-red-400">
          <MdAttachMoney />
        </span>
        <span className="text-sm text-stone-700 my-auto ml-3">
          Total Salaries
          <div className="text-3xl">{kFormatter(totalSalries)}$</div>
        </span>
      </span>
    </>
  );
}

export default StaticEmployees;
