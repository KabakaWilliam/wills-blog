import ProjectCard from "./ProjectCard";

const ProjectsContainer = () => {
  return (
    <div className="w-[100vw] md:w-[60vw] h-max md:mx-[20vw] mt-[10vh] border-dashed border-4 flex-col md:flex-row flex flex-wrap justify-center items-center">
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
    </div>
  );
};

export default ProjectsContainer;
