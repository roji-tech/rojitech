import styled from "styled-components";

const CertStyle = styled.section`
  /* .certs {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-gap: 2rem;
    justify-items: center;
    align-content: center;
  } */

  .certs {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: space-around;
    align-items: center;
  }
`;

export default CertStyle;

export const CertBoxStyle = styled.div`
  width: 300px;
  background-color: var(--trans);
  height: 300px;
  margin: 10px;
  display: grid;
  grid-template-rows: 80% 20%;

  .img {
    width: 100%;
    display: flex;
    justify-content: center;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .text {
    color: ${({ lightMode }) => (!lightMode ? "var(--dark)" : "var(--white)")};
    background-color: ${({ lightMode }) =>
      !lightMode ? "var(--blue)" : "var(--dark)"};
    padding: 5px;
    font-size: 0.9em;
    text-align: center;
  }

  @media screen and (min-width: 1000px) {
    width: 400px;
  }
`;
