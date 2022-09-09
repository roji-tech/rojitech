import EduStyle from "./eduStyle";
import { Heading } from "../../StyleGlobal";
import UnderStroke from "../../EXTRAS/UnderStroke/UnderStroke";

const Edu = () => {
  return (
    <EduStyle>
      <Heading j_content={"center"}>
        <h1>Education</h1>
        <UnderStroke />
      </Heading>
      <div className="text">
        <dd>
          <p>Federal University of Technology Akure, Nigeria.</p>
          <p>Bachelor of Technology</p>
          <p>Cyber Security</p>
          <dl>2019 - Present</dl>
        </dd>
      </div>
    </EduStyle>
  );
};

export default Edu;
