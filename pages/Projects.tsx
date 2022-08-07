import Head from "next/head";
import ProjectsContainer from "../components/ProjectsContainer";

const Projects = () => {
  return (
    <>
      <Head>
        <title>{"Projects"}</title>
        <meta name="description" content="My projects" />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👨🏾‍💻</text></svg>"
        />
      </Head>
      <ProjectsContainer />
    </>
  );
};

export default Projects;
