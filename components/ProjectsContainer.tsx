import ProjectCard from "./ProjectCard";
import ProjectJSON from "../data/Projects.json";
import { useDarkMode } from "usehooks-ts";
import { useEffect, useState } from "react";
const ProjectsContainer = () => {
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
      className={`w-[100vw] md:w-[60vw] h-max md:mx-[20vw] mt-[10vh] ${border} border-dashed border-4 flex-col md:flex-row flex flex-wrap justify-center items-center`}
    >
      {/* <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard /> */}
      {ProjectJSON.map((projectData) => (
        <ProjectCard key={projectData.key} projectData={projectData} />
      ))}
    </div>
  );
};

export default ProjectsContainer;
