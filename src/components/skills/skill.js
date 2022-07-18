import styled from "styled-components";

const SkillStyle = styled.section`
  padding: 10% 0;
  padding-left: 10%;
  background-color: var(--bg-light);
  display: grid;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  .skills {
    width: 90%;
    margin-top: 20px;
    display: grid;
    /* grid-template-columns: repeat(auto-fill, minmax(400px, 3fr)); */
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2rem;
    /* background-color: red; */

    .small {
      margin-bottom: 40px;
      padding-bottom: 30px;
      color: white;
    }
  }

  @media screen and (max-width: 800px) {
    align-items: center;
    padding: 0;

    div.about__text {
      margin: 5% 0;
      width: 80%;
    }
  }
`;

export default SkillStyle;

export const SkillBox = styled.div``;
