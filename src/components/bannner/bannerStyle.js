import styled from "styled-components";

const BannerStyle = styled.main`
  display: grid;
  height: 90vh;
  grid-template-columns: 5fr 6fr;
  /* color: ${({ lightMode }) =>
    !lightMode ? "var(--white)" : "var(--dark)"}; */
  width: var(--lg-width);

  @media screen and (max-width: 1125px) {
    width: var(--md-width);
  }

  @media screen and (max-width: 600px) {
    width: var(--sm-width);
  }

  .rojitech {
    position: absolute;
    font-size: 2em;
    top: 10px;
    left: 10px;

    @media screen and (max-width: 800px) {
      font-size: 1.2em;
    }
  }

  div {
    /* padding-left: 15%; */
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 5%;

    .hi {
      /* font-family: satisfy; */
      font-size: 1.1em;
      color: ${({ lightMode }) =>
        !lightMode ? "var(--trans3)" : "var(--black)"};
      letter-spacing: 4px;
    }

    small {
      color: var(--trans3);
      /* text-align: center; */
      color: ${({ lightMode }) =>
        !lightMode ? "var(--trans3)" : "var(--dark)"};
    }

    .langs {
      margin: 0;
      font-size: x-small;
      padding: 0;
    }

    .name {
      font-size: 1.5em;
      font-weight: bold;
    }

    p {
    }

    .stack {
      font-size: 2em;
      font-weight: bolder;
      letter-spacing: 1px;
      text-shadow: 2px 1px #07073084;
    }

    .socials {
      padding: 0;
      width: 100%;
      display: flex;
      flex-direction: row;
      gap: 5%;
      justify-content: start;

      .social {
        background-color: var(--bg-lighter);
        border-radius: 50%;
        cursor: pointer;
        padding: 3px;
        transition: 0.3s all ease-in-out;

        :hover {
          transform: scale(1.3);
        }
      }
    }

    #myBtns {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      gap: 10px;

      @media screen and (max-width: 800px) {
        flex-direction: column;
        padding: 15px 0;
      }
    }

    @media screen and (max-width: 800px) {
      padding: 20% 0 20%;
      align-items: center;
      gap: 8%;
      /* background-color: gray; */

      .hi {
        font-family: satisfy;
        font-size: 1.1em;
        /* color: var(--bg-white); */
      }

      .stack {
        /* color: var(--bg-white); */
        font-size: 1.4em;
      }

      p {
        margin-bottom: 10px;
      }

      /* button {
        margin: 20px 0 0;
      } */

      p {
      }

      .socials {
        margin: 30px 0 0;
        justify-content: center;
      }
    }
  }

  div.cube {
    display: flex;
    justify-content: center;
    margin-top: -20%;
    align-items: flex-start;
  }

  @media screen and (max-width: 1100px) {
    height: 70vh;
  }

  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* gap: 4em; */
    height: max-content;
  }
`;

export default BannerStyle;
