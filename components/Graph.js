"use client";
import AreaChartPlot from "./AreaChartPlot";
function Graph({ data }) {
  const date = data?.map((item) =>
    item.date.replace("-", "").replace("-", "").slice(0, 8)
  );
  const incomes = data
    ?.map((item) => item.benefit)
    .sort((a, b) => Number(a) - Number(b));

  const packages = data.map((item) => item.packages);
  const dataView = date.map((date, index) => {
    const Samsung = packages;
    return {
      date: date,
      incomes: +incomes[index],
      Samsung: +Samsung[index],
    };
  });
  return (
    <section className="mt-7 m-auto px-4 gap-3 w-full">
      <div className="w-full h-[300px] bg-gray-300 rounded-xl mt-2 ">
        <AreaChartPlot dataView={dataView} />
      </div>
    </section>
  );
}

export default Graph;
