import { ExternalLinkIcon } from "@heroicons/react/outline";
import { useRouter } from "next/router";
import { useEffect } from "react";
// import { useDarkMode } from "usehooks-ts";
import ThemeButton from "./ThemeButton";

const Footer = () => {
  // const { isDarkMode, toggle, enable, disable } = useDarkMode();
  const router = useRouter();
  useEffect(() => {}, []);
  return (
    <footer className="w-screen h-[20vh] md:px-[20vw] ">
      <div
        // className={`md:w-[60vw] h-max md:h-[100%] text-black dark:text-white  md:pt-2 pt-5`}
        className={`md:w-[60vw] h-max md:h-[100%]   md:pt-2 pt-5`}
      >
        <div className="w-[100%] flex-col gap-y-10 md:gap-y-0 h-[90%] md:flex md:flex-row ">
          <div className="md:w-[30%] md:h-[30%]">
            <div className="font-bold text-lg select-none">Site</div>
            <div className="cursor-pointer">
              <div
                onClick={() => router.push("/")}
                className="text-[#888989] hover:text-[#EC519B]"
              >
                Home
              </div>
              <div
                onClick={() => router.push("/Snippets")}
                className="text-[#888989] hover:text-[#EC519B]"
              >
                Snippets
              </div>
              <div
                onClick={() => router.push("/Projects")}
                className="text-[#888989] hover:text-[#EC519B]"
              >
                Projects
              </div>
            </div>
          </div>
          <div className="md:w-[30%] md:h-[30%]">
            <div className="font-bold text-lg select-none">Social</div>
            <div className="text-[#888989] ">
              <a
                href="https://www.linkedin.com/in/williamgitta/"
                target={"_blank"}
                className="flex w-[100%] gap-x-2 items-center hover:text-[#EC519B] cursor-pointer "
              >
                <span>Linkedin </span>
                <ExternalLinkIcon className="h-4" />
              </a>
              <a
                href="https://twitter.com/William__Gitta"
                target={"_blank"}
                className="flex w-[100%] gap-x-2 items-center hover:text-[#EC519B] cursor-pointer"
              >
                <span>Twitter </span>
                <ExternalLinkIcon className="h-4" />
              </a>
              <a
                href="https://github.com/KabakaWilliam"
                target={"_blank"}
                className="flex w-[100%] gap-x-2 items-center hover:text-[#EC519B] cursor-pointer"
              >
                <span>Github </span>
                <ExternalLinkIcon className="h-4" />
              </a>
              {/* <div className="flex w-[100%] gap-x-2 items-center hover:text-[#EC519B] cursor-pointer">
                <span>CodePen </span>
                <ExternalLinkIcon className="h-4" />
              </div> */}
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
