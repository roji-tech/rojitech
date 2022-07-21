import styled from "styled-components";

export const FooterWrapper = styled.footer`
  background: var(--blue);
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
