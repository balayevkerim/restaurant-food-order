import Header from "@/components/layout/Header";
import Head from "next/head";
import Home from "./home";

export default function Index() {
  return (
    <div>
        <Head>
          <title>Next App</title>
        </Head>
        <Home />
    </div>
  );
}
