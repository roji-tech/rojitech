import { SkillBoxStyle } from "./skillStyle";

const SkillBox = ({ text, imgSrc, icon }) => {
  return (
    <SkillBoxStyle>
      {icon ? icon : <img src={imgSrc} className="icon" alt="" />}
      <p> {text} </p>
    </SkillBoxStyle>
  );
};

export default SkillBox;
