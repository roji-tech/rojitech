import React from "react";
import { Heading } from "../../StyleGlobal";
import { AboutWrap } from "./aboutStyle";
import UnderStroke from "../../EXTRAS/UnderStroke/UnderStroke";

const About = () => {
  return (
    <AboutWrap id="about">
      <Heading j_content={"center"}>
        <h1>About Me</h1>
        <UnderStroke />
      </Heading>

      <div className="about__text">
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp; I'm a Full-stack Developer and Cyber Security
          Enthusiast with almost 3 years experience in programming, I'm a Nigerian and I stay in Ondo State, Nigeria. I'm
          passionate about programming, and more than willing to learn more.
        </p>
        <br />
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp; I've been able to build and equip myself with
          full-stack technologies to enable me stand out in the tech industry
          and be able to contribute positively.
        </p>
      </div>
    </AboutWrap>
  );
};

export default About;
