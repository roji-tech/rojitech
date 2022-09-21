import styled from "styled-components";

const CCStyles = styled.section`
  display: flex;
  flex-direction: column;

  .challenges {
    display: flex;
    gap: 1em;
    justify-content: space-evenly;
    flex-wrap: wrap;
    margin: 2% 1%;

    @media screen and (max-width: 1000px) {
    }
  }
`;

export default CCStyles;

export const ChallengeBoxStyle = styled.div`
  width: 300px;
  background-color: var(--light);
  background-color: yellow;
  height: 350px;
  margin: 10px;
  display: grid;
  grid-template-rows: 8fr 3fr;
  transition: all 0.2s ease-in-out;

  .img {
    width: 100%;
    display: flex;
    justify-content: center;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .text {
    color: white;
    background-color: ${({ lightMode }) =>
      !lightMode ? "var(--blue)" : "var(--dark)"};
    flex-direction: column;
    font-size: 1em;
    text-align: center;
    font-weight: 900;
    display: flex;
    justify-content: space-around;
    align-items: center;

    .links {
      display: flex;
      justify-content: space-evenly;
      gap: 10px;

      a {
        color: inherit;
        text-decoration: none;
        cursor: pointer;
        border-radius: 30px;
        padding: 7px 15px;
        background-color: ${({ lightMode }) =>
          !lightMode ? "var(--dark)" : "var(--blue)"};
        transition: all 0.1s ease-in;

        :hover {
          box-shadow: 1px 1px 5px 1px white;
        }
      }
    }
  }

  :hover {
    box-shadow: 1px 1px 15px 1px
      ${({ lightMode }) => (!lightMode ? "var(--white)" : "var(--dark)")};
    transform: scale(1.04);
  }

  @media screen and (min-width: 1000px) {
    width: 400px;
  }
`;
