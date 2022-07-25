import LightModeFunc from "../../Context";
import AllProjectStyle from "./AllProjects";
import ProjectBox from "../../components/projects/ProjectBox";
import { Heading } from "../../StyleGlobal";
import UnderStroke from "../../EXTRAS/UnderStroke/UnderStroke";
import myProjects from "../../components/projects/myProjects.json";

const AllProjects = () => {
  const { lightMode } = LightModeFunc();

  return (
    <AllProjectStyle lightMode={lightMode}>
      <div className="head">
        <h1>ABDULLAH JAMIU</h1>
        <small className="langs">Python Django Javascript ReactJS NextJS</small>
      </div>

      <div className="wrapper">
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
      </div>
    </AllProjectStyle>
  );
};

export default AllProjects;
