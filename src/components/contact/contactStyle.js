import styled from "styled-components";

export const ContactWrap = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;

  form {
    width: 60%;
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    justify-content: center;
    border-radius: 10px;
    background-color: var(--blue);
    padding: 20px;
    gap: 5%;

    @media screen and (max-width: 800px) {
      width: 90%;
    }

    input,
    textarea {
      margin: 20px 0;
      border-radius: 5px;
      background-color: var(--bg-light);
      width: 100%;
      resize: none;
      padding: 20px;
      outline: none;
    }

    button {
      width: max-content;
      align-self: center;
      padding: 10px 50px;
      border-radius: 20px;
      cursor: pointer;
    }
  }
`;
