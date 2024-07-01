import { formatDate } from "@/context/date";
import TodayDeal from "./TodayDeal";

function CustomedOutInc({ data }) {
  const today = formatDate(new Date());
  const dataIncFiltered = data.filter((item) => item.date === today);
  return (
    <>
      <span className=" shad flex flex-col mr-2  md:mx-auto mx-0  mt-6 text-center w-3/6 md:w-[49%] h-[250px] bg-stone-300  rounded-[40px] p-5 text-2xl mb-2">
        <div className="sm:text-xl text-lg font-semibold text-stone-700 mx-auto p-0 h-fit   pb-1 w-full">
          All Deals Today
        </div>
        <div className=" overflow-y-scroll scroll">
          {dataIncFiltered.map((item) => (
            <TodayDeal item={item.company} key={item.id} />
          ))}
        </div>
      </span>
    </>
  );
}

export default CustomedOutInc;
