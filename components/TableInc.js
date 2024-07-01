import Deal from "./Deal";
import Empty from "./Empty";

function TableInc({ data }) {
  if (data.length === 0) return <Empty item="deals" />;
  return (
    <div className="text-center mx-4 md:mt-16 mt-8 md:text-base text-[8px] xs:text-[10px] sm:text-sm font-normal sm:font-semibold text-gray-500 ">
      {data?.map((deal) => (
        <Deal deal={deal} key={deal.id} />
      ))}
    </div>
  );
}

export default TableInc;
