import React from "react";
import SkillStyle from "./skillStyle";
import { Heading } from "../../GlobalStyle";
import UnderStroke from "../../EXTRAS/UnderStroke/UnderStroke";
import SkillBox from "./SkillBox";
import python from "../../IMGS/python.jpeg";
import bt from "../../IMGS/bt.jpeg";
import php from "../../IMGS/php.png";
import git from "../../IMGS/git.png";
import cplus from "../../IMGS/c++.png";
import react from "../../IMGS/react.png";
import wp from "../../IMGS/wp.png";
import css from "../../IMGS/css.png";
import django from "../../IMGS/django.png";
import html from "../../IMGS/html.png";
import js from "../../IMGS/js.png";
import java from "../../IMGS/java.png";

const Skills = () => {
  return (
    <SkillStyle>
      <Heading>
        <h1>My Skills</h1>
        <UnderStroke />
      </Heading>
      <div className="skills">
        <div className="boxes">
          <p className="small">Advance</p>
          <div className="box">
            <SkillBox text={"Python"} imgSrc={python} />
            <SkillBox text={"Django"} imgSrc={django} />
            {/* <SkillBox text={"Django DRF"} imgSrc={drf} /> */}
            <SkillBox text={"Javascript"} imgSrc={js} />
            <SkillBox text={"React"} imgSrc={react} />
            <SkillBox text={"HTML "} imgSrc={html} />
            <SkillBox text={"CSS"} imgSrc={css} />
            <SkillBox text={"Git"} imgSrc={git} />
          </div>
        </div>
        <div className="boxes">
          <p className="small">Intermediate</p>
          <div className="box">
            <SkillBox text={"Bootstrap"} imgSrc={bt} />
            <SkillBox text={"PHP"} imgSrc={php} />
          </div>
        </div>
        <div className="boxes">
          <p className="small">Basic</p>
          <div className="box last">
            <SkillBox text={"C++"} imgSrc={cplus} />
            <SkillBox text={"WordPress"} imgSrc={wp} />
            <SkillBox text={"Java"} imgSrc={java} />
          </div>
        </div>
      </div>
    </SkillStyle>
  );
};

export default Skills;
