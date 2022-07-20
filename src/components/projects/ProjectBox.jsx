import { ProjectBoxStyle } from "./projectStyle";

const ProjectBox = ({ imgSrc, desc, langs, appname, GHlink, LDlink }) => {
  return (
    <ProjectBoxStyle disabled={true}>
      <p className="appname">{appname}</p>
      <div className="imgBox">
        <img src={imgSrc} alt="" />
      </div>
      <div className="desc">
        <small>{desc}</small>
      </div>

      <p className="langs">
        <p>{langs}</p>
      </p>

      <div className="links">
        <div className={`livelink ${LDlink ? "" : "fade"} `}>
          <a href={LDlink}>Live Demo</a>
        </div>
        <div className={`gitlink ${GHlink ? "" : "fade"} `}>
          <a href={GHlink}>Github</a>
        </div>
      </div>
    </ProjectBoxStyle>
  );
};

export default ProjectBox;
