import { getStaticProps as getStaticPropsInc } from "./incomes";
import { getStaticProps as getStaticPropsEmp } from "./employees";
import CustomedOutEmp from "./index/CustomedOutEmp";
import CustomedOutInc from "./index/CustomedOutInc";
import Graph from "./index/Graph";
import StaticEmployees from "./index/StaticEmployees";
import StaticIncomes from "./index/StaticIncomes";

export async function getStaticProps() {
  const dataEmp = await getStaticPropsEmp();
  const dataInc = await getStaticPropsInc();
  return {
    props: {
      ...dataEmp.props,
      ...dataInc.props,
    },
  };
}
export default function Home({ dataEmp, dataInc }) {
  return (
    <div className="md:flex grid flex-wrap cols4 w-fit  ml-5 bg-transparent h-[98%] mt-3 pt-9 rounded-xl">
      <StaticIncomes data={dataInc} />
      <StaticEmployees data={dataEmp} />
      <CustomedOutInc data={dataInc} />
      <CustomedOutEmp data={dataEmp} />
      <Graph data={dataInc} />
    </div>
  );
}
