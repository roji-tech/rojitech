import styled from "styled-components";

export const FooterWrapper = styled.footer`
  background: var(--bg-lighter);
  display: flex;
  flex-direction: column;
  gap: 2em;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 5% 0;
  color: var(--blue);
  
  .name {
    color: black;
  }

  @media screen and (max-width: 800px) {
    color: var(--bg-white);
    padding: 12% 0;
  }
`;
