import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import ArticleCard from "../components/ArticleCard";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>{"William's Blog"}</title>
        <meta
          name="description"
          content="A Home for my internet tech opinions and insights"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Navbar />
        <div className="w-[100vw] md:w-[60vw] h-max md:mx-[20vw] mt-[10vh] border-dashed border-4 ">
          <div className="w-[100%] select-none h-[15vh] text-[60px] flex items-center md:block  md:text-[100px] font-bold textGradientWelcome animate-gradient-xy ">
            {"Will's Blog"}
          </div>
          <div className="w-[100%] h-max  flex items-center justify-center">
            {/* card container */}
            <div className="w-[100%] h-max flex-col flex items-center justify-center  border-red-400">
              {/* actual card */}
              <ArticleCard />

              <ArticleCard />

              <ArticleCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
