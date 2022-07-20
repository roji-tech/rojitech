import { ProjectStyle } from "./projectStyle";
import ProjectBox from "./ProjectBox";
import { Heading } from "../../GlobalStyle";
import UnderStroke from "../../EXTRAS/UnderStroke/UnderStroke";
import app from "../../IMGS/redux.png";

const Projects = () => {
  return (
    <ProjectStyle>
      <Heading>
        <h1>My Projects</h1>
        <UnderStroke />
      </Heading>

      <div className="projects">
        <ProjectBox
          imgSrc={app}
          GHlink={"akbdf"}
          langs={"Python JavaScript Bootstrap"}
          desc={"This Eccomerce app "}
          appname={"Our app"}
        />
        <ProjectBox
          appname={"My app"}
          GHlink={"akbdf"}
          langs={"Python JavaScript Bootstrap"}
          desc={
            "This Eccomerce appLorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo tenetur in quidem eaque ad sed quaerat est voluptates, iusto culpa pariatur. Provident ex eius laborum non numquam id, quos suscipit placeat impedit ad aliquid rerum fugit quod! Dolore, autem ratione! "
          }
        />
        <ProjectBox
          imgSrc={app}
          GHlink={"akbdf"}
          langs={"Python JavaScript Bootstrap"}
          desc={"This Eccomerce app "}
          appname={"Our app"}
        />
        <ProjectBox
          imgSrc={app}
          GHlink={"akbdf"}
          langs={"Python JavaScript Bootstrap"}
          desc={"This Eccomerce app "}
          appname={"Our app"}
        />
      </div>
    </ProjectStyle>
  );
};

export default Projects;
