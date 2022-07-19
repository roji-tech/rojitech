import { ProjectStyle } from "./projectStyle";
import ProjectBox from "./ProjectBox";
import { Heading } from "../../GlobalStyle";
import UnderStroke from "../../EXTRAS/UnderStroke/UnderStroke";

const Projects = () => {
  return (
    <ProjectStyle>
      <Heading>
        <h1>My Projects</h1>
        <UnderStroke />
      </Heading>

      <div className="projects">
        <ProjectBox />
        <ProjectBox />
        <ProjectBox />
        <ProjectBox />
      </div>
    </ProjectStyle>
  );
};

export default Projects;
