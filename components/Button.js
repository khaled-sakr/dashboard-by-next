const styles = {
  normal:
    "  float-left  relative cursor-pointer rounded-xl py-5 md:px-5 px-2 md:mr-2 sm:mr-2 mr-1 md:mx-2 mx-1  md:font-bold font-semibold  mt-10 shad  bg-stone-100 text-stone-700 ",
  select:
    " after:absolute  after:bg-stone-100 md:after:w-[34px] sm:after:w-9 after:w-[31px] md:after:h-[60px] after:h-[56px] sm:after:h-[56px] md:after:-right-6 sm:after:-right-6  after:-right-[20px] after:top-[0px] shad after:-top-0 ",
  add: " cursor-pointer rounded-xl  text-stone-100 text-center float-right text-xs sm:text-base md:text-lg bg-red-700 hover:bg-red-800 sm:font-semibold font-base shad ",
  danger:
    "text-white text-xs sm:text-sm md:text-base rounded-lg border-red-300 sm:px-3 px-2 sm:py-1 py-[4px] bg-red-600 hover:bg-red-700 mx-2 float-right block font-semibold shad ",
  pag: " text-stone-700 sm:font-bold font-semibold cursor-pointer mx-0  rounded-lg hover:disabled:text-stone-100 hover:disabled:bg-gray-500   sm:text-lg md:text-2xl text-sm hover:bg-sky-950  hover:text-stone-100 disabled:text-zinc-400 disabled:cursor-not-allowed  ",
};

function Button({ children, addStyle, onClick, type, select, disabled }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={
        styles[type] + " " + (select && styles.select) + " " + addStyle
      }
    >
      {children}
    </button>
  );
}

export default Button;
