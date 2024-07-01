import { BsFillFileBarGraphFill, BsFillPersonFill } from "react-icons/bs";
import { BiSearchAlt2 } from "react-icons/bi";
function Header() {
  return (
    <div className="bg-stone-500 w-full top-0 left-0  h-[75px] bg-fixed p-2 ">
      <div className="w-full flex bg-stone-100 h-[60px] rounded-xl m-auto justify-between pl-9">
        <span className=" flex sm:text-5xl text-2xl my-auto text-stone-700 ">
          <BsFillFileBarGraphFill />
        </span>
        <a
          href="https://dashboard-cv.netlify.app/"
          className="text-center sm:text-sm text-[8px] sm:rounded-md rounded-sm my-auto font-semibold text-red-100 bg-red-600 p-2 border-red-800"
        >
          The same project but router app
        </a>
        <span className="flex gap-3 justify-end">
          <BiSearchAlt2 className="text-stone-700  m-auto sm:text-6xl text-2xl my-auto" />
          <input
            type="text"
            className="bg-stone-400 block outline-none px-6  m-auto text-sm w-full h-9 rounded-md "
          />
          <span className="sm:text-4xl text-2xl my-auto mr-9   text-gray-100 rounded-full bg-stone-700 p-1">
            <BsFillPersonFill />
          </span>
        </span>
      </div>
    </div>
  );
}

export default Header;
