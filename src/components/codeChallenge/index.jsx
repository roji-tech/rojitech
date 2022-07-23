import React from "react";
import CCStyles from "./CodeChallenge";
import { Heading } from "../../StyleGlobal";
import UnderStroke from "../../EXTRAS/UnderStroke/UnderStroke";

const CodeChallenge = () => {
  return (
    <CCStyles>
      <Heading>
        <h1>Coding Challenges</h1>
        <UnderStroke />
      </Heading>
      <div></div>
    </CCStyles>
  );
};

export default CodeChallenge;
