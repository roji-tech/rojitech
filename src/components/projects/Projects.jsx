import { ProjectStyle } from "./projectStyle";
import { Link, useLocation } from "react-router-dom";
import ProjectBox from "./ProjectBox";
import { Heading } from "../../StyleGlobal";
import UnderStroke from "../../EXTRAS/UnderStroke/UnderStroke";
import myProjects from "./myProjects.json";

const Projects = () => {
  const location = useLocation();

  return (
    <ProjectStyle id="projects">
      <Heading>
        <h1>My Projects</h1>
        <UnderStroke />
      </Heading>

      <ul className="projects">
        {myProjects.map(
          ({ id, appname, LDlink, imgSrc, desc, GHlink, langs }) => (
            <ProjectBox
              key={id}
              imgSrc={require(`../../IMGS/${imgSrc ? imgSrc : "redux.png"}`)}
              GHlink={GHlink}
              LDlink={LDlink}
              langs={langs}
              desc={desc}
              appname={appname}
            />
          )
        )}
      </ul>
      {location.pathname === "/" && (
        <Link to={"/projects"}>View more Projects</Link>
      )}
    </ProjectStyle>
  );
};

export default Projects;
