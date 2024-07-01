import Head from "next/head";
import Link from "next/link";

function error() {
  return (
    <div>
      <Head>
        <title>ERROR 404</title>{" "}
      </Head>
      <div className=" mt-9 text-amber-700 text-4xl sm:text-6xl m-auto text-center md:text-7xl">
        Page Is Not Defined
        <Link href="/" className="text-vanilla-500 block mt-6">
          &larr;Go Home
        </Link>
      </div>
    </div>
  );
}

export default error;
