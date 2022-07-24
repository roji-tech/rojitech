import { ProjectStyle } from "./projectStyle";
import { Link, useLocation } from "react-router-dom";
import ProjectBox from "./ProjectBox";
import { Heading } from "../../StyleGlobal";
import UnderStroke from "../../EXTRAS/UnderStroke/UnderStroke";
import myProjects from "./myProjects.json";
import LightModeFunc from "../../Context";

const Projects = () => {
  const location = useLocation();
  const { lightMode } = LightModeFunc();

  return (
    <ProjectStyle lightMode={lightMode} id="projects">
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
        <div className="seeMore">
          <Link to={"/projects"} className="morePro">
            View more Projects
          </Link>
        </div>
      )}
    </ProjectStyle>
  );
};

export default Projects;
