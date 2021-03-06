import { useRouter } from "next/router";
import { useDarkMode } from "usehooks-ts";

const Navbar = () => {
  const { isDarkMode, toggle, enable, disable } = useDarkMode();

  const router = useRouter();

  const handleClick = (e: any) => {
    e.preventDefault();
    router.push("/Projects");
  };
  return (
    // <nav
    //   className={
    //     isDarkMode
    //       ? `border-b border-[#777a] z-50 font-bold text-white  w-screen px-[20vw]  h-[10vh] flex items-center justify-center fixed top-0 text-lg backdrop-blur-sm`
    //       : `border-b border-[#777a] z-50 font-bold text-gray-500  w-screen px-[20vw]  h-[10vh] flex items-center justify-center fixed top-0 text-lg backdrop-blur-sm`
    //   }
    // >
    <nav
      className={`border-b border-[#777a] z-50 font-bold text-gray-400 w-screen px-[20vw]  h-[10vh] flex items-center justify-center fixed top-0 text-lg backdrop-blur-sm`}
    >
      <a
        href="https://williamgitta.com"
        className="w-[20vw] h-[100%] select- hover:text-[#EC519B] cursor-pointer flex items-center justify-center"
      >
        Home
      </a>
      <div
        onClick={(e) => {
          e.preventDefault();
          router.push("/");
        }}
        className="w-[20vw] h-[100%] select-none hover:text-[#EC519B] cursor-pointer flex items-center justify-center"
      >
        Blog
      </div>
      <a
        onClick={(e) => handleClick(e)}
        href="https://www.williamgitta.com/#projects"
        className="w-[20vw] h-[100%] select-none hover:text-[#EC519B] cursor-pointer flex items-center justify-center"
      >
        Projects
      </a>
    </nav>
  );
};

export default Navbar;
