import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import ArticleCard from "../components/ArticleCard";
import BodyContainer from "../components/BodyContainer";
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
        <BodyContainer />
      </div>
    </div>
  );
};

export default Home;
