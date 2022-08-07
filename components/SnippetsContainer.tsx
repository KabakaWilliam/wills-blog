import React, { useEffect, useState } from "react";
import { useDarkMode } from "usehooks-ts";
import SnippetCard from "./SnippetCard";

interface SnippetDataTypes {
  SnippetData: Array<posts>;
}

const SnippetsContainer = ({ SnippetData }: SnippetDataTypes) => {
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
    <div
      className={`w-[100vw] md:w-[60vw] h-max md:mx-[20vw] mt-[10vh] ${border} border-dashed border-4`}
    >
      <div className="w-[100%] select-none h-[15vh] text-[60px] flex items-center md:block  md:text-[100px] font-bold textGradientWelcome animate-gradient-xy ">
        {"Useful Snippets"}
      </div>
      <div className="w-[100%] h-max  flex items-center justify-center">
        {/* card container */}
        <div className="w-[100%] h-max flex-col flex items-center justify-center  border-red-400">
          {/* actual card */}

          {SnippetData.map(({ slug, frontmatter }) => (
            <SnippetCard key={slug} slug={slug} frontmatter={frontmatter} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SnippetsContainer;

// const SnippetsContainer = () => {
//   return <div>SnippetsContainer</div>;
// };

// export default SnippetsContainer;
