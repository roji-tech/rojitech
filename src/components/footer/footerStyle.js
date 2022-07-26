import styled from "styled-components";

export const FooterWrapper = styled.footer`
  background: ${({ lightMode }) =>
    !lightMode ? "var(--blue)" : "var(--dark)"};
  color: ${({ lightMode }) => (!lightMode ? "var(--dark)" : "var(--blue)")};
  display: flex;
  flex-direction: column;
  gap: 2em;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 5% 0;

  .name {
    font-weight: 1000;
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
    padding: 12% 0;
  }
`;
