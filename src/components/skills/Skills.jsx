import React from "react";
import { advance, intermediate, basic } from "./myskills";
import SkillStyle from "./skillStyle";
import { Heading } from "../../StyleGlobal";
import UnderStroke from "../../EXTRAS/UnderStroke/UnderStroke";
import SkillBox from "./SkillBox";

import LightModeFunc from "../../Context";

const Skills = () => {
  const { lightMode } = LightModeFunc();

  return (
    <SkillStyle lightMode={lightMode} id="skills">
      <Heading>
        <h1>My Skills</h1>
        <UnderStroke />
      </Heading>
      <div className="skills">
        <div className="boxes">
          <p className="small">Advance</p>
          <div className="box advanced">
            <div className="stack">
              <p className="ends">Backend</p>
              <div className="lang">
                {advance.backend.map(({ text, icon }, index) => (
                  <SkillBox key={index} text={text} icon={icon} />
                ))}
              </div>
            </div>
            <div className="stack">
              <p className="ends"> Frontend </p>
              <div className="lang">
                {advance.frontend.map(({ text, icon }, index) => (
                  <SkillBox key={index} text={text} icon={icon} />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="boxes">
          <p className="small">Intermediate</p>
          <div className="box">
            {intermediate.map(({ text, icon }, index) => (
              <SkillBox key={index} text={text} icon={icon} />
            ))}
          </div>
        </div>
        <div className="boxes">
          <p className="small">Basic</p>
          <div className="box last">
            {basic.map(({ text, icon }, index) => (
              <SkillBox key={index} text={text} icon={icon} />
            ))}
          </div>
        </div>
      </div>
    </SkillStyle>
  );
};

export default Skills;
