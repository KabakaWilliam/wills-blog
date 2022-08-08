import type {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
  NextPage,
} from "next";
import Head from "next/head";
import Image from "next/image";
import BodyContainer from "../../components/BodyContainer";
import fs, { readFileSync } from "fs";
import matter from "gray-matter";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ParsedUrlQuery } from "querystring";

const AnimationBlogPage: NextPage = ({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [PostData, setPostData] = useState<posts[]>(posts);

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
        <BodyContainer PostData={PostData} animation={true} />
      </div>
    </div>
  );
};

export default AnimationBlogPage;

export const getStaticProps: GetStaticProps = async (context) => {
  const files = fs.readdirSync("AnimationClassPosts");

  const posts = files.map((fileName) => {
    const slug = fileName.replace(`.md`, "");
    const readFile = fs.readFileSync(
      `AnimationClassPosts/${fileName}`,
      "utf-8"
    );
    const { data: frontmatter } = matter(readFile);
    return {
      slug,
      frontmatter,
    };
  });
  return {
    props: {
      posts,
    },
  };
};
