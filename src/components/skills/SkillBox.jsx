import { SkillBoxStyle } from "./skillStyle";

const SkillBox = ({ text, imgSrc }) => {
  return (
    <SkillBoxStyle>
      <img src={imgSrc} alt="" />
      <p> {text} </p>
    </SkillBoxStyle>
  );
};

export default SkillBox;
