import Employee from "./Employee";
import Empty from "./Empty";

function TableEmp({ data }) {
  if (data.length === 0) return <Empty item="employees" />;

  return (
    <div className="text-center mx-4 md:mt-16 mt-8 md:text-base text-[8px] xs:text-[10px] sm:text-sm font-normal sm:font-semibold text-gray-500">
      {data?.map((employee) => (
        <Employee employee={employee} key={employee.id} />
      ))}
    </div>
  );
}

export default TableEmp;
