import styled from "styled-components";

export const AboutWrap = styled.section`
  display: flex;
  /* background-color: var(--bg-white); */
  flex-direction: column;
  justify-content: center;
  align-items: center;

  div.about__text {
    line-height: 1.8rem;
    margin: 5% 0;
    width: 40%;
  }

  @media screen and (max-width: 1050px) {
    div.about__text {
      width: 60%;
    }
  }

  @media screen and (max-width: 600px) {
    div.about__text {
      margin: 5% 0;
      width: 90%;
    }
  }
`;
