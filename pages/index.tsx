import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import BodyContainer from "../components/BodyContainer";

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>{"William's Blog"}</title>
        <meta
          name="description"
          content="A Home for my internet tech opinions and insights"
        />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👨🏾‍💻</text></svg>"
        />
      </Head>
      <div>
        {/* <Navbar /> */}
        <BodyContainer />
      </div>
    </div>
  );
};

export default Home;
