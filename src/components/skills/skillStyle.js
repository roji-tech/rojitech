import styled from "styled-components";

const SkillStyle = styled.section`
  /* background-color: var(--bg-light); */
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

      .frontend {
      }

      .backend {
      }

      .small {
        margin-left: 15px;
        color: ${({ lightMode }) =>
          !lightMode ? "var(--bg-blue)" : "var(--bg-white)"};
        font-weight: 1000;
        padding: 6px 20px;
        border-radius: 30px;
        background: ${({ lightMode }) =>
          !lightMode ? "var(--bg-light)" : "var(--dark)"};
        width: max-content;
      }
    }

    .box {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      gap: 40px;
      padding-bottom: 50px;
    }

    .box.advanced {
      display: flex;
      flex-direction: column;
      /* gap: 30px; */

      div.stack {
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 30px;

        .ends {
          align-self: center;
        }

        div.lang {
          display: flex;
          justify-content: space-evenly;
          flex-wrap: wrap;
          gap: 20px;

          @media screen and (min-width: 800px) {
            padding:0 50px
          }

          @media screen and (max-width: 500px) {
            justify-content: center;
          }
        }
      }
    }

    .box:not(.last) {
      border-bottom: 1px solid var(--blue);
    }

    /* background-color: red; */
  }

  @media screen and (max-width: 800px) {
    align-items: center;

    div.about__text {
      margin: 5% 0;
      width: 80%;
    }
  }
`;

export default SkillStyle;

export const SkillBoxStyle = styled.div`
  width: 110px;
  /* height: 80px; */
  background-color: var(--bg-blue);
  border-radius: 22px;
  padding: 6px 20px;
  display: flex;
  flex-direction: column;
  gap: 3px;
  justify-content: center;
  align-items: center;
  color: ${({ lightMode }) => (!lightMode ? "var(--bg-light)" : "var(--dark)")};

  .icon {
    width: 35px;
    aspect-ratio: 1/1;
  }

  @media screen and (max-width: 800px) {
    .icon {
      width: 25px;
    }
  }

  /* @media screen and (max-width: 500px) {
    flex-direction: row;
    height: max-content;
    width: max-content;
    padding: 10px 15px;

    .icon {
      width: 20px;
    }
  } */
`;
