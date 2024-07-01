function ErrorInput({ error }) {
  return (
    <>
      {error && (
        <div
          className={`text-[10px] md:text-xs text-red-700 font-semibold w-3/12 xsm:pt-0 pt-2 ml-3
           `}
        >
          {error}
        </div>
      )}
    </>
  );
}

export default ErrorInput;
