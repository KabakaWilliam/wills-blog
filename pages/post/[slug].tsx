import { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import fs, { readFileSync } from "fs";
import { ParsedUrlQuery } from "querystring";
import matter from "gray-matter";
import highlightjs from "markdown-it-highlightjs";
import markdownIt from "markdown-it";
import { useDarkMode } from "usehooks-ts";
import { useEffect, useState } from "react";

const md = markdownIt().use(highlightjs);

const Slug: NextPage = ({
  frontmatter,
  content,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [textHeader, setTextHeader] = useState("black");
  const { isDarkMode, toggle, enable, disable } = useDarkMode();
  useEffect(() => {
    if (isDarkMode) {
      setTextHeader("white");
    } else {
      setTextHeader("black");
    }
  }, [isDarkMode]);
  return (
    <div
      className={`prose  prose-zinc prose-headings:text-${textHeader} text-${textHeader}  mx-auto  `}
    >
      <h1 className="mt-[10vh] ">{frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: md.render(content) }} />
    </div>
  );
};

export default Slug;

export const getStaticPaths = async () => {
  const files = fs.readdirSync("Posts");
  const paths = files.map((filename) => {
    return {
      params: {
        slug: filename.replace(`.md`, ""),
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

interface IParams extends ParsedUrlQuery {
  slug: string;
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as IParams;
  const fileName = fs.readFileSync(`Posts/${slug}.md`, `utf-8`);
  const { data: frontmatter, content } = matter(fileName);
  return {
    props: {
      frontmatter,
      content,
    },
  };

  // const files = fs.readdirSync("Posts");
};
