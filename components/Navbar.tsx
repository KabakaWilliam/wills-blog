const Navbar = () => {
  return (
    <nav className="border-b border-[#777a] z-50 text-white w-screen px-[20vw]  h-[10vh] flex items-center justify-center fixed top-0  backdrop-blur-sm">
      <div className="w-[20vw] h-[100%] select-none hover:text-[#EC519B] cursor-pointer flex items-center justify-center">
        Home
      </div>
      <div className="w-[20vw] h-[100%] select-none hover:text-[#EC519B] cursor-pointer flex items-center justify-center">
        Blog
      </div>
      <div className="w-[20vw] h-[100%] select-none hover:text-[#EC519B] cursor-pointer flex items-center justify-center">
        Projects
      </div>
    </nav>
  );
};

export default Navbar;
