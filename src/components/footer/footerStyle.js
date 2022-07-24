import styled from "styled-components";

export const FooterWrapper = styled.footer`
  background: ${({ lightMode }) =>
    !lightMode ? "var(--blue)" : "var(--dark)"};
  color: ${({ lightMode }) =>
    !lightMode ? "var(--dark)" : "var(--blue)"};
  display: flex;
  flex-direction: column;
  gap: 2em;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 5% 0;

  @media screen and (max-width: 800px) {
    padding: 12% 0;
  }
`;
