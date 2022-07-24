import { ProjectBoxStyle } from "./projectStyle";

const ProjectBox = ({ imgSrc, desc, langs, appname, GHlink, LDlink }) => {
  return (
    <ProjectBoxStyle>
      <p className="appname">{appname}</p>
      <div className="imgBox">
        <img src={imgSrc} alt="" />
      </div>
      <div className="desc">
        <small>{desc}</small>
      </div>

      <p className="langs">{langs}</p>

      <div className="links">
        <div className={`livelink ${LDlink ? "" : "fade"} `}>
          <a href={LDlink} target="_blank" rel="noreferrer">
            Live Demo
          </a>
        </div>
        <div className={`gitlink ${GHlink ? "" : "fade"} `}>
          <a href={GHlink} target="_blank" rel="noreferrer">
            Github
          </a>
        </div>
      </div>
    </ProjectBoxStyle>
  );
};

export default ProjectBox;
