import ArticleCard from "./ArticleCard";
import { useDarkMode } from "usehooks-ts";

const BodyContainer = () => {
  const { isDarkMode, toggle, enable, disable } = useDarkMode();

  return (
    <div
      className={
        isDarkMode
          ? `w-[100vw] md:w-[60vw] h-max md:mx-[20vw] mt-[10vh] border-dashed border-4`
          : `w-[100vw] md:w-[60vw] h-max md:mx-[20vw] mt-[10vh] border-black border-dashed border-4`
      }
    >
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
  );
};

export default BodyContainer;
