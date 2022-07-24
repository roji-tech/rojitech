import {
  FaPython,
  FaCss3,
  FaGitAlt,
  FaJsSquare,
  FaHtml5,
  FaReact,
} from "react-icons/fa";
import LightModeFunc from "../../Context";
import CubeSpinnerStyle from "./CubeSpinner";

const CubeSpin = ({ width, a_width }) => {
  const { lightMode } = LightModeFunc();

 
  return (
    <CubeSpinnerStyle lightMode={lightMode} width={width} a_width={a_width}>
      <div className="cubespinner">
        <div className="face1">
          <FaPython color="#0000FF" />
        </div>
        <div className="face2">
          <FaHtml5 color="#F06529" />
        </div>
        <div className="face3">
          <FaCss3 color="#28A4D9" />
        </div>
        <div className="face4">
          <FaReact color="#5ED4F4" />
        </div>
        <div className="face5">
          <FaJsSquare color="#EFD81D" />
        </div>
        <div className="face6">
          <FaGitAlt color="#EC4D28" />
        </div>
      </div>
    </CubeSpinnerStyle>
  );
};

export default CubeSpin;
