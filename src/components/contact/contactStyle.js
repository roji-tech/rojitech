import styled from "styled-components";

export const ContactWrap = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90%;
  align-self: center;
  justify-self: center;
  border-radius: 10px;
  background-color: var(--bg-dark);
  box-shadow: 0 0 5px 0.5px;

  .contact-stroke {
    margin: 6px;
  }
  .p1 {
    margin: 5px;
    font-size: larger;
    color: var(--bg-white);
  }
`;

export const ContactHead = styled.h3``;

export const ContactFormWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  h4 {
    font-family: cursive;
    font-size: x-large;
    margin: 5px 0 3px 10px;
  }
  .form {
    display: grid;
    grid-gap: 15px;
    grid-template-columns: 1fr 1fr;
    width: 100%;
    height: 100%;
    padding: 5px 0 20px 0;

    @media screen and (max-width: 800px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-top: 15px;
    }

    .contact-box {
      padding: 15px;
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 0.5em;
      justify-content: center;
      align-items: center;
      border-right: 0.5px dotted var(--bg-light);

      a {
        text-decoration: none;

        .box {
          color: var(--bg-light);
          justify-self: center;
          width: 190px;
          height: 130px;
          background-color: var(--color-2);
          border-radius: 15px;
          transition: background 0.3s, box-shadow 300ms ease-in;
          cursor: pointer;

          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;

          :hover {
            background: var(--color-1);
            box-shadow: 0 0 10px 1px var(--bg-light);
          }

          @media screen and (max-width: 500px) {
            width: 300px;
          }

          @media screen and (max-width: 360px) {
            width: 220px;
          }

          &:nth-child(3) {
            grid-column: 1/3;
            justify-self: center;
            align-self: center;
          }

          h4 {
            color: var(--bg-white);
          }
        }
      }

      @media screen and (max-width: 800px) {
        grid-gap: 3em;
        border-right: none;
        border-bottom: 2px dotted var(--bg-dark);
      }

      @media screen and (max-width: 500px) {
        display: flex;
        gap: 2em;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
    }

    form {
      width: 100%;
      height: 100%;
      padding: 0 10px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;

      @media screen and (max-width: 800px) {
        display: flex;
        flex-direction: column;
        gap: 1em;
        justify-self: center;
        align-items: center;
        margin-top: 15px;
      }

      div {
        box-sizing: border-box;
        padding-top: 5px;
        color: black;
        width: 80%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        font-weight: 1000;
      }

      .contact-buttons {
        width: 100%;
        display: flex;
        flex-direction: row-reverse;
        justify-content: flex-end;

        @media screen and (max-width: 800px) {
          flex-direction: row;
          justify-content: center;
          align-items: center;
        }
        @media screen and (max-width: 350px) {
          flex-direction: column;
        }

        button {
          box-sizing: border-box;
          font-size: large;
          padding: 10px 40px;
          margin: 15px 5px;
          //  width: 70%;
          border-radius: 10px;
          background-color: var(--bg-light);
          transition: background padding 0.3s;
          font-weight: 1000;

          &:hover {
            background: var(--bg-white);
          }

          @media screen and (max-width: 400px) {
            margin-top: 1em;
            flex-direction: column;
            gap: 0.5em;
          }
        }
      }

      input {
        padding: 7px;
        border-radius: 10px;
        font-size: 1em;
        font-weight: 700;

        &:focus {
          outline: none;
        }
      }

      textarea {
        box-sizing: border-box;
        padding: 10px;
        margin: 8px 0;
        color: black;
        width: 100%;
        resize: none;
        border-radius: 10px;
        font-size: 1em;
        font-weight: 700;

        &:focus {
          outline: none;
        }
      }
    }
  }
`;
