import styled from "styled-components";

export const ContactWrap = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;

  div.contact {
    width: 100%;
    border-radius: 10px;
    display: grid;
    grid-template-columns: 1fr 1.6fr;

    @media screen and (max-width: 800px) {
      display: flex;
      flex-direction: column-reverse;
    }

    div.socials {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 15px;

      a {
        text-decoration: none;
        color: initial;
      }

      @media screen and (max-width: 800px) {
        padding: 30px 5px;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
      }
    }

    form {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      background-color: var(--blue);
      padding: 8%;
      gap: 5%;

      input,
      textarea {
        margin: 15px 0;
        border-radius: 5px;
        background-color: var(--bg-light);
        width: 100%;
        resize: none;
        padding: 12px;
        outline: none;
        font-size: 1.1rem;
      }

      button {
        width: max-content;
        align-self: center;
        padding: 10px 30%;
        border-radius: 20px;
        background-color: var(--bg-blue);
        color: var(--bg-white);
        font-weight: 900;
        cursor: pointer;
      }
    }
  }
`;

export const ContactBoxStyle = styled.div`
  color: var(--white);
  font-weight: 1000;
  font-size: 0.8em;
  width: 100px;
  aspect-ratio: 1/1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 15px;
  gap: 6px;
  border-radius: 50%;
  background-color: ${({ lightMode }) =>
    !lightMode ? "var(--bg-light)" : "var(--dark)"};
  cursor: pointer;

  background-image: linear-gradient(
    ${({ lightMode }) => (!lightMode ? "var(--bg-light)" : "var(--dark)")} 50%,
    var(--bg-blue) 60%
  );
`;
