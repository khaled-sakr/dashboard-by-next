import { getServerSideProps as getServerSidePropsInc } from "./incomes";
import { getServerSideProps as getServerSidePropsEmp } from "./employees";
import StaticIncomes from "@/components/StaticIncomes";
import StaticEmployees from "@/components/StaticEmployees";
import CustomedOutInc from "@/components/CustomedOutInc";
import CustomedOutEmp from "@/components/CustomedOutEmp";
import Graph from "@/components/Graph";

export async function getServerSideProps() {
  const dataEmp = await getServerSidePropsEmp();
  const dataInc = await getServerSidePropsInc();
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
