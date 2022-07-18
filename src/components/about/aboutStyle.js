import styled from "styled-components";

export const AboutWrap = styled.section`
  width: 100%;
  display: flex;
  background-color: var(--bg-white);
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15% 10px;

  div.about__text {
    margin: 5% 0;
    width: 35%;
  }

  @media screen and (max-width: 900px) {
    div.about__text {
      width: 50%;
    }
  }

  @media screen and (max-width: 600px) {
    div.about__text {
      margin: 5% 0;
      width: 80%;
    }
  }
`;
