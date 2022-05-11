import { ExternalLinkIcon } from "@heroicons/react/outline";
import { useDarkMode } from "usehooks-ts";

const ProjectCard = () => {
  const { isDarkMode, toggle, enable, disable } = useDarkMode();

  // transition ease-in-out delay-150 hover:translate-x-[40vw]
  return (
    <div className="md:w-[50%] flex justify-center py-5">
      <div className="w-[300px] md:w-[20vw] h-[400px] border hover:border-[3px] border-[#ababab] hover:border-[#EC519B]  rounded-lg cursor-pointer   ">
        <div className="w-[100%] h-[50%] bg-white border rounded-t-lg flex justify-end  p-3">
          <div className="w-[50px] h-[50px] shadow-lg shadow-black bg-black rounded-full flex items-center justify-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
              className="h-8"
            />
          </div>
        </div>
        <div className={`w-[100%] h-[50%] px-5 bg-black   font-bold  `}>
          <div className="w-[100%] h-[75px]  text-white text-3xl flex items-center font-bold">
            {" "}
            <div>Netflix UI</div>
            <div className="pl-3">
              {" "}
              <ExternalLinkIcon className="h-5 stoke-1 text-[#a0a0a0]" />
            </div>
          </div>
          <div className="w-[100%] h-[50px] text-[#6d7377] text-lg flex items-start">
            {" "}
            Heres for the bois
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
