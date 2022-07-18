import styled from "styled-components";

export const FooterWrapper = styled.footer`
  background: var(--bg-dark);
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  gap: 1em;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 20px;
  padding-top: 40px;
  color: var(--bg-light);

  .thanks {
    display: flex;
    flex-direction: column;
    gap: 1em;
    justify-content: center;
    align-items: center;

    p {
      font-size: var(--fontBig);
      font-family: cursive;
    }
  }
  small {
    margin: 40px 0 20px;
  }

  .media {
    padding-top: 50px;
  }
`;
export const FooterWrap = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-evenly;
  align-items: space-between;

  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const FooterButtons = styled.div`
  padding-top: 50px;
  display: flex;
  justify-content: space-around;

  @media screen and (max-width: 900px) {
    display: flex;
    flex-direction: column;
    gap: 1em;
    align-items: center;
    justify-content: center;
  }

  @media screen and (max-width: 400px) {
    display: flex;
    flex-direction: column;
    gap: 1em;
    align-items: center;
  }
`;
