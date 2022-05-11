import { ExternalLinkIcon } from "@heroicons/react/outline";
import { useDarkMode } from "usehooks-ts";
import ThemeButton from "./ThemeButton";

const Footer = () => {
  const { isDarkMode, toggle, enable, disable } = useDarkMode();

  return (
    <footer className="w-screen h-[20vh] md:px-[20vw] ">
      <div
        className={
          isDarkMode
            ? `md:w-[60vw] h-max md:h-[100%] text-white md:pt-2 pt-5`
            : `md:w-[60vw] h-max md:h-[100%] text-black md:pt-2 pt-5`
        }
      >
        <div className="w-[100%] flex-col gap-y-10 md:gap-y-0 h-[90%] md:flex md:flex-row ">
          <div className="md:w-[30%] md:h-[30%]">
            <div className="font-bold text-lg">Site</div>
            <div className="text-[#888989] hover:text-[#EC519B]">Home</div>
            <div className="text-[#888989] hover:text-[#EC519B]">Blog</div>
            <div className="text-[#888989] hover:text-[#EC519B]">Projects</div>
          </div>
          <div className="md:w-[30%] md:h-[30%]">
            <div className="font-bold text-lg">Social</div>
            <div className="text-[#888989] ">
              <div className="flex w-[100%] gap-x-2 items-center hover:text-[#EC519B] cursor-pointer ">
                <span>Linkedin </span>
                <ExternalLinkIcon className="h-4" />
              </div>
              <div className="flex w-[100%] gap-x-2 items-center hover:text-[#EC519B] cursor-pointer">
                <span>Twitter </span>
                <ExternalLinkIcon className="h-4" />
              </div>
              <div className="flex w-[100%] gap-x-2 items-center hover:text-[#EC519B] cursor-pointer">
                <span>Github </span>
                <ExternalLinkIcon className="h-4" />
              </div>
              <div className="flex w-[100%] gap-x-2 items-center hover:text-[#EC519B] cursor-pointer">
                <span>CodePen </span>
                <ExternalLinkIcon className="h-4" />
              </div>
            </div>
          </div>
          <div className="relative w-full flex justify-end bottom-[-35px] pr-5  md:block   md:static ">
            <ThemeButton />
          </div>
        </div>
        <div className="w-[100%] h-[10%] pt-4">
          <div>
            <span className="text-gray-300 font-thin text-sm">
              {`Copyright © ${new Date().getFullYear()}  `}
            </span>
            <span>William Gitta</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
