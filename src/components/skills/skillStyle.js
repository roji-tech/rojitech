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
    display: flex;
    /* grid-template-columns: repeat(auto-fill, minmax(400px, 3fr)); */
    /* grid-template-columns: repeat(3, 1fr); */
    flex-direction: column;
    gap: 5rem;

    .boxes {
      display: flex;
      flex-direction: column;
      gap: 40px;

      .small {
        color: var(--blue);
        padding: 15px;
        border-radius: 30px;
        background: var(--bg-white);
        width: max-content;
      }
    }

    .box {
      /* background-color: black; */
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      gap: 40px;
      padding-bottom: 50px;
      border-bottom: 1px solid var(--blue);
    }
    /* background-color: red; */
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

export const SkillBoxStyle = styled.div`
  width: 120px;
  height: 120px;
  background-color: var(--lg-white);
  border-radius: 30px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  justify-content: center;
  align-items: center;

  img {
    width: 70%;
    aspect-ratio: 1/1;
  }
`;
