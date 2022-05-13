import ArticleCard from "./ArticleCard";
import { useDarkMode } from "usehooks-ts";
import { useEffect, useState } from "react";
interface PostDataTypes {
  PostData: Array<posts>;
}

const BodyContainer = ({ PostData }: PostDataTypes) => {
  const { isDarkMode, toggle, enable, disable } = useDarkMode();
  const [border, setBorder] = useState("border-black");

  useEffect(() => {
    if (isDarkMode) {
      setBorder("border-white");
    } else {
      setBorder("border-black");
    }
  }, [isDarkMode]);

  return (
    //       className={`w-[100vw] md:w-[60vw] h-max md:mx-[20vw] mt-[10vh] dark:border-white border-black border-dashed dark:border-dashed border-4 dark:border-4`}
    // <div
    //   className={
    //     isDarkMode
    //       ? `w-[100vw] md:w-[60vw] h-max md:mx-[20vw] mt-[10vh] border-dashed border-4`
    //       : `w-[100vw] md:w-[60vw] h-max md:mx-[20vw] mt-[10vh] border-black border-dashed border-4`
    //   }
    // >
    <div
      className={`w-[100vw] md:w-[60vw] h-max md:mx-[20vw] mt-[10vh] ${border} border-dashed border-4`}
    >
      <div className="w-[100%] select-none h-[15vh] text-[60px] flex items-center md:block  md:text-[100px] font-bold textGradientWelcome animate-gradient-xy ">
        {"Will's Blog"}
      </div>
      <div className="w-[100%] h-max  flex items-center justify-center">
        {/* card container */}
        <div className="w-[100%] h-max flex-col flex items-center justify-center  border-red-400">
          {/* actual card */}

          {PostData.map(({ slug, frontmatter }) => (
            <ArticleCard key={slug} title={slug} frontmatter={frontmatter} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BodyContainer;
