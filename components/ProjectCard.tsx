import { ExternalLinkIcon } from "@heroicons/react/outline";
import Image from "next/image";
import { useDarkMode } from "usehooks-ts";
interface data {
  projectData: projectData;
}
const ProjectCard = ({ projectData }: data) => {
  const { isDarkMode, toggle, enable, disable } = useDarkMode();

  // transition ease-in-out delay-150 hover:translate-x-[40vw]
  return (
    <div className="md:w-[50%]  flex justify-center py-5">
      <a
        href={projectData.Link}
        target="_blank"
        className="w-[300px] md:w-[20vw] h-[400px] border hover:border-[3px] border-[#ababab] hover:border-[#EC519B]  rounded-lg cursor-pointer   "
      >
        <div className="w-[100%] h-[50%] bg-white  rounded-t-lg relative  ">
          <div className="w-[50px] h-[50px] shadow-lg shadow-black bg-black rounded-full flex items-center justify-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
              className="h-8"
            />
          </div>
          <Image
            src={projectData.Image}
            // width={340}
            // height={210}
            layout="fill"
            className="w-[100%] h-[100%] object-cover rounded-t-lg"
          />
        </div>
        <div
          className={`w-[100%] h-[50%] px-5 bg-black rounded-b-lg  font-bold  `}
        >
          <div className="w-[100%] h-[75px]  text-white text-3xl flex items-center font-bold">
            {" "}
            <div>{projectData.Title}</div>
            <div className="pl-3">
              {" "}
              <ExternalLinkIcon className="h-5 stoke-1 text-[#a0a0a0]" />
            </div>
          </div>
          <div className="w-[100%] h-[50px] text-[#6d7377] text-lg flex items-start">
            {" "}
            {projectData.Description}
          </div>
        </div>
      </a>
    </div>
  );
};

export default ProjectCard;
