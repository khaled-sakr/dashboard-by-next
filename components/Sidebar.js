import { AiFillHome } from "react-icons/ai";
import { MdEngineering } from "react-icons/md";
import { GiMoneyStack } from "react-icons/gi";
import Link from "next/link";
import { useRouter } from "next/router";
import Button from "./Button";
// import Button from "./Button";
// import Button from "@/components/Button";
// import Button from "@/component/Button";
function Sidebar() {
  // const { pathname } = useLocation();
  const { pathname } = useRouter();
  return (
    <div className="md:col-span-2 col-span-3 row-span-1  md:text-xl text-md text-center pt-6 bg-stone-500 md:w-20 sm:w-16 w-14">
      <ul>
        <li>
          <Link href="/">
            <Button type="normal" select={pathname === "/"}>
              <AiFillHome />
            </Button>
          </Link>
        </li>
        <li>
          <Link href="/employees">
            <Button type="normal" select={pathname === "/employees"}>
              <MdEngineering />
            </Button>
          </Link>
        </li>
        <li>
          <Link href="/incomes">
            <Button
              children="Incomes"
              type="normal"
              select={pathname === "/incomes"}
            >
              <GiMoneyStack />
            </Button>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;

//  after:w-5 sm:hover:w-9 after:h-10 sm:after:h-[52px] after:-right-3 sm:after:-right-7 after:top-0 hover:after:block after:hidden sm:text-base text-xs
