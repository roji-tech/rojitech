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
        I'm a <b>Full-stack Developer</b> and cyber security student in a
        university with almost 2 years experience in programming, I'm passionate
        about programming, and I've been able to build and equip myself with
        full-stack technologies to enable me stand out in the tech industry and
        be able to contribute to it positively.
      </div>
    </AboutWrap>
  );
};

export default About;
