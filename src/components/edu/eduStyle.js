import styled from "styled-components";

const EduStyle = styled.section`
  text-align: center;
  display: flex;
  /* background-color: var(--bg-white); */
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .text {
    line-height: 1.8rem;
    margin: 5% 0;
    width: 70%;
  }

  @media screen and (max-width: 1050px) {
    .text {
      width: 80%;
    }
  }

  @media screen and (max-width: 600px) {
    .text {
      margin: 5% 0;
      width: 90%;
    }
  }
`;

export default EduStyle;
