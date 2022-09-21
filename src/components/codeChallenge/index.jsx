import React from "react";
import CCStyles from "./CodeChallenge";
import { Heading } from "../../StyleGlobal";
import UnderStroke from "../../EXTRAS/UnderStroke/UnderStroke";
import CHALLENGES from "./challenges";
import ChallengeBox from "./ChallengeBox";

const CodeChallenge = () => {
  return (
    <CCStyles id="challenge">
      <Heading j_content={"center"}>
        <h1>Coding Challenges</h1>
        <UnderStroke />
      </Heading>
      <div className="challenges">
        {CHALLENGES.map((challenge) => (
          <ChallengeBox item={challenge} />
        ))}
      </div>
    </CCStyles>
  );
};

export default CodeChallenge;
