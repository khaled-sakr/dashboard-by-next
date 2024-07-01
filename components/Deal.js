import ThreeDot from "@/components/ThreeDot";

function Deal({ deal }) {
  const { company, dealer, benefit, phone, packages, date, id } = deal;
  return (
    <div className="grid grid-cols-13 md:mb-8  mb-5 items-center text-gray-400 rounded-lg  border-l-4 pr-1  border-red-700 bg-white py-3 ">
      <span className="col-span-2 border-r border-red-900">{company}</span>
      <span className="col-span-2 border-r border-red-900">{date}</span>
      <span className="col-span-2 border-r border-red-900">{dealer}</span>
      <span className="col-span-2 border-r border-red-900">{packages}</span>
      <span className="col-span-2 border-r border-red-900">{benefit}$</span>
      <span className="col-span-2 ">+{phone}</span>
      <span className="col-span-1 mx-auto ml-4 relative">
        <ThreeDot idItem={id} type="incomes" dataDeal={deal} />
      </span>
    </div>
  );
}

export default Deal;
