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
          Cyber Security Student
          <dt>Federal University of Technology Akure</dt>
          <dl>2019 - Present Date</dl>
        </dd>
      </div>
    </EduStyle>
  );
};

export default Edu;
