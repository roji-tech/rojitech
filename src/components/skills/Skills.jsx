import React from "react";
import SkillStyle from "./skill";
import { Heading } from "../../GlobalStyle";
import UnderStroke from "../EXTRAS/UnderStroke/UnderStroke";

const Skills = () => {
  return (
    <SkillStyle>
      <Heading>
        <h1>My Skills</h1>
        <UnderStroke />
      </Heading>
      <div className="skills">
        <div>
          <small className="small">Advance</small>
          <div>Python</div>
          <div>Django</div>
          <div>Javascript</div>
          <div>React</div>
          <div>HTML</div>
          <div>CSS</div>
          <div>Git and GitHub</div>
        </div>
        <div>
          <small className="small">Intermediate</small>
          <div>PHP</div>
        </div>
        <div>
          <small className="small">Basic</small>
          <div>C++</div>
          <div>WordPress</div>
          <div>WordPress</div>
        </div>
      </div>
    </SkillStyle>
  );
};

export default Skills;
