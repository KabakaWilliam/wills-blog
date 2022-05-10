import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>William's Blog</title>
        <meta
          name="description"
          content="A Home for my internet tech opinions and insights"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <nav className="border-b border-[#777a] z-50 text-white w-screen px-[20vw]  h-[10vh] flex items-center justify-center fixed top-0  backdrop-blur-sm">
          <div className="w-[20vw] h-[100%] flex items-center justify-center">
            Home
          </div>
          <div className="w-[20vw] h-[100%] flex items-center justify-center">
            Blog
          </div>
          <div className="w-[20vw] h-[100%] flex items-center justify-center">
            Projects
          </div>
        </nav>
        <div className="w-[60vw] h-max mx-[20vw] mt-[10vh] border-dashed border-4 ">
          <div className="w-[100%]  h-[15vh]  text-[100px] font-bold textGradientWelcome animate-gradient-xy ">
            {"Will's Blog"}
          </div>
          <div className="w-[100%] h-max  flex items-center justify-center">
            {/* card container */}
            <div className="w-[100%] h-max flex-col flex items-center justify-center  border-red-400">
              {/* actual card */}
              <div className="w-[100%] h-[300px] flex items-center justify-center  ">
                {/* actual card */}
                <div className="w-[60%] h-[240px]  rounded-lg z-30 bg-green-400 cursor-pointer  ">
                  <div className="w-[100%] h-[240px] border rounded-lg z-30 bg-black  relative  top-5 right-10 ">
                    <div className="w-[100%] h-[50%] flex  items-center justify-center text-white text-4xl font-bold">
                      Why I dont learn CLI commands anymore ?
                    </div>
                    <div className="w-[100%] h-[50%] flex items-end text-white pb-2 pl-2 ">
                      <div className="w-[80px] h-[40px] bg-red-300 text-black flex items-center justify-center font-bold rounded-[3px]">
                        CLI
                      </div>
                      <div className="w-[90%]  flex justify-end pr-5 text-white font-thin">
                        May 11, 2021
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* card body */}
              <div className="w-[100%] border-y border-[#c6c6c6] border-1">
                <div className="w-[100%] h-[300px] flex items-center justify-center  ">
                  {/* actual card */}
                  <div className="w-[60%] h-[240px]  rounded-lg z-30 border bg-black cursor-pointer p-5 ">
                    <div className="w-[100%] h-[50%] flex  items-center justify-center text-white text-4xl font-bold">
                      Why I dont learn CLI commands anymore ?
                    </div>
                    <div className="w-[100%] h-[50%] flex items-end text-white  ">
                      <div className="w-[80px] h-[40px] bg-red-300 text-black flex items-center justify-center font-bold rounded-[3px]">
                        CLI
                      </div>
                      <div className="w-[90%]  flex justify-end  text-white font-thin">
                        May 11, 2021
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* card body */}
              <div className="w-[100%] border-y border-[#c6c6c6] border-1">
                <div className="w-[100%] h-[300px] flex items-center justify-center  ">
                  {/* actual card */}
                  <div className="w-[60%] h-[240px]  rounded-lg z-30 border bg-black cursor-pointer p-5 ">
                    <div className="w-[100%] h-[50%] flex  items-center justify-center text-white text-4xl font-bold">
                      Why I dont learn CLI commands anymore ?
                    </div>
                    <div className="w-[100%] h-[50%] flex items-end text-white  ">
                      <div className="w-[80px] h-[40px] bg-red-300 text-black flex items-center justify-center font-bold rounded-[3px]">
                        CLI
                      </div>
                      <div className="w-[90%]  flex justify-end  text-white font-thin">
                        May 11, 2021
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
