import UnderStroke from "../../EXTRAS/UnderStroke/UnderStroke";
import { Heading } from "../../StyleGlobal";
import ExperienceStyle from "./ExperienceStyle";

const Experience = () => {
  return (
    <ExperienceStyle id="exp">
      <Heading>
        <h1>Experience</h1>
        <UnderStroke />
      </Heading>
      <div className="exps">
        <div className="exp">
          <h2>Django | ReactJS Full Stack Developer Intern and Lead</h2>
          <div className="comp">
            <h3>PeersApp</h3>
            <small>
              <span>June 2022</span> - Present
            </small>
          </div>
          <div className="info">
            I Implemetated designs from product designers, wrote clean code and
            documentation, created API endpoint for Mobile app team. I Also
            worked with websocket to create real time chatting and feedback
            while using AWS S3 buckets for storage, redis fo caching and some
            other technologies.
          </div>
        </div>
        <div className="exp">
          <h2>React Frontend Developer and Lead</h2>
          <div className="comp">
            <h3>Side Hustle</h3>
            <small>
              <span>August 2022</span> - Present
            </small>
          </div>
          <div className="info">
            I Implemented responsive design, authentication and also played a
            lead role.
          </div>
        </div>
        <div className="exp">
          <h2>Django | ReactJS Full Stack Developer Intern</h2>
          <div className="comp">
            <h3>Side Hustle</h3>
            <small>
              <span>May 2022</span> - June 2022
            </small>
          </div>
          <div className="info">
            I Worked on different project comprising of design implementation,
            database logics, consuming different APIs. I also Worked in a team
            of developers, while playing both frontend and backend role.
          </div>
        </div>
      </div>
    </ExperienceStyle>
  );
};

export default Experience;
