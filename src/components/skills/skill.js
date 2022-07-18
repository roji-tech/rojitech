import styled from "styled-components";

const SkillStyle = styled.section`
  padding: 10% 0;
  padding-left: 10%;
  background-color: var(--bg-light);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  background-color: yellow;

  @media screen and (max-width: 800px) {
    div.about__text {
      margin: 5% 0;
      width: 80%;
    }
  }
`;

export default SkillStyle;
