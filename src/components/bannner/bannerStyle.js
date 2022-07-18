import styled from "styled-components";

const BannerStyle = styled.section`
  display: grid;
  height: 90vh;
  width: 100%;
  grid-template-columns: 4fr 3fr;
  color: black;

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
    padding-left: 15%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 5%;

    .hi {
      font-family: satisfy;
      font-size: 1.1em;
      color: var(--blue);
    }

    .name {
      font-size: 1.5em;
      font-weight: bold;
    }

    .stack {
      color: var(--blue);
      font-size: 2em;
      font-weight: bolder;
      text-shadow: 3px 3px #07073084;
    }

    .socials {
      padding: 0;
      width: 100%;
      display: flex;
      flex-direction: row;
      gap: 5%;
      justify-content: start;

      .social {
        background-color: var(--bg-light);
        border-radius: 50%;
        padding: 3px;
      }
    }

    @media screen and (max-width: 800px) {
      padding: 20% 0 20%;
      align-items: center;
      gap: 8%;
      background-color: gray;

      .hi {
        font-family: satisfy;
        font-size: 1.1em;
        color: var(--blue);
      }

      .stack {
        color: white;
        font-size: 1.4em;
        text-shadow: 3px 3px #07073084;
      }

      p {
        margin-bottom: 10px;
      }

      button {
        margin: 20px 0 0;
      }

      .socials {
        margin: 30px 0 0;
        justify-content: center;
      }
    }
  }

  div.banner__img {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--bg-light);

    img {
      width: 80%;

      @media screen and (max-width: 800px) {
        width: 90%;
      }
    }
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
