import { LuPackageSearch } from "react-icons/lu";

import { RiHandHeartFill } from "react-icons/ri";
import { kFormatter } from "@/context/date";
function StaticIncomes({ data }) {
  const totalIncomes = data
    ?.map((item) => +item.benefit)
    ?.reduce((acc, cur) => acc + cur, 0);
  const totalPackages = data
    ?.map((item) => +item.packages)
    ?.reduce((acc, cur) => acc + cur, 0);

  return (
    <>
      <span className=" shad flex p-2 flex-col m-0 md:m-auto  text-center w-56 h-52 mr-4 bg-stone-300 rounded-[70px] mb-6 ">
        <span className="rounded-full  text-5xl  p-3  mt-3 mx-auto text-stone-700 bg-green-400">
          <RiHandHeartFill />
        </span>
        <span className="text-sm text-stone-700 my-auto ml-3 ">
          Total Revenues
          <div className="text-3xl">{kFormatter(totalIncomes)}$</div>
        </span>
      </span>
      <span className=" shad flex p-2 flex-col m-0 md:m-auto  text-center w-56 h-52 mr-4 bg-stone-300 rounded-[70px] mb-6 ">
        <span className="rounded-full text-5xl p-3 mt-3 mx-auto text-stone-700 bg-sky-400">
          <LuPackageSearch />
        </span>
        <span className="text-sm text-stone-700 my-auto ml-3 ">
          Total Packages
          <div className="text-3xl">{kFormatter(totalPackages)}p</div>
        </span>
      </span>
    </>
  );
}

export default StaticIncomes;
