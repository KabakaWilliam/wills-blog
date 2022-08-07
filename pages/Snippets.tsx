import { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import Head from "next/head";
import React, { useState } from "react";
import SnippetsContainer from "../components/SnippetsContainer";
import fs from "fs";
import matter from "gray-matter";

const Snippets: NextPage = ({
  snippets,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [SnippetData, setSnipptData] = useState<posts[]>(snippets);
  return (
    <div>
      <Head>
        <title>{"William's Snippets"}</title>
        <meta name="description" content="Some frequently used code snippets" />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👨🏾‍💻</text></svg>"
        />
      </Head>
      <SnippetsContainer SnippetData={SnippetData} />
    </div>
  );
};

export default Snippets;

export const getStaticProps: GetStaticProps = async (context) => {
  const files = fs.readdirSync("Snippets");

  const snippets = files.map((fileName) => {
    const slug = fileName.replace(`.md`, "");
    const readFile = fs.readFileSync(`Snippets/${fileName}`, "utf-8");
    const { data: frontmatter } = matter(readFile);
    return {
      slug,
      frontmatter,
    };
  });
  return {
    props: {
      snippets,
    },
  };
};
