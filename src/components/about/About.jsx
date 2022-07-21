import React from "react";
import { Heading } from "../../StyleGlobal";
import { AboutWrap } from "./aboutStyle";
import UnderStroke from "../../EXTRAS/UnderStroke/UnderStroke";
// import "./about.css";

const About = () => {
  return (
    <AboutWrap id="about">
      <Heading j_content={"center"}>
        <h1>About Me</h1>
        <UnderStroke />
      </Heading>

      <div className="about__text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque ullam
        tempora delectus. Atque fugit exercitationem nemo deleniti tempora, id
        expedita.
      </div>
    </AboutWrap>
  );
};

export default About;

// import React from "react";
// import Button from "../button/Button";
// import logo from "../../imgs/kotlin.png";
// import "./about.css";
// import UnderStroke from "../EXTRAS/UnderStroke/UnderStroke";

// const About = () => {
//   return (
//     <div className="about-wrap">
//       <div className="about">
//         <h3>About Me</h3>
//         <UnderStroke />
//         <p>why Choose Me</p>
//         <div className="about-content">
//           <div className="about-pics-container">
//             <div className="about-pics__div">
//               <img src={logo} alt="about pics" className="about-pics" />
//             </div>
//           </div>
//           <div className="about-info">
//             <p>
//               Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic sit
//               repellat libero
//             </p>
//             <div className="about-skills">
//               <h4>Here are a Few Highlight</h4>
//               <li>Writer</li>
//               <li>Publisher</li>
//               <li>Social Media Manager</li>
//               <li>Content Creator</li>
//             </div>
//             <div className="get-job-btn">
//               <Button fontSize={"large"} text={"Hire Me"} />
//               <Button fontSize={"large"} text={"Get Resume"} />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;
