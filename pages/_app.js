import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { ContextProject } from "@/context/ContextProject";
import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      {" "}
      <ContextProject>
        <Head>
          <title>Vanilla Co</title>
          <link rel="icon" href=".\images.png" />
        </Head>
        <Header />
        <div
          className="flex bg-stone-100  min-h-screen max-h-full
        "
        >
          <Sidebar />
          <div className="rounded-xl  w-9/12 mx-auto bg-stone-100 overflow-x-auto">
            <Component {...pageProps} />
          </div>
        </div>
      </ContextProject>
    </>
  );
}
