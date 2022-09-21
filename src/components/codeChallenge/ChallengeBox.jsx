import LightModeFunc from "../../Context";
import { ChallengeBoxStyle } from "./CodeChallenge";

const ChallengeBox = ({ item }) => {
  const { lightMode } = LightModeFunc();

  return (
    <ChallengeBoxStyle lightMode={lightMode}>
      <div className="img">
        <img
          src={require(`../../IMGS/${item.img ? item.img : "redux.png"}`)}
          alt=""
        />
      </div>
      <div className="text">
        <p>{item.name}</p>
        <div className="links">
          <div className={`livelink`}>
            <a href={item.LDlink} target="_blank" rel="noreferrer">
              Live Demo
            </a>
          </div>
          <div className={`gitlink`}>
            <a href={item.GHlink} target="_blank" rel="noreferrer">
              Github
            </a>
          </div>
        </div>
      </div>
    </ChallengeBoxStyle>
  );
};

export default ChallengeBox;
