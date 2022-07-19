import styled from "styled-components";

export const FooterWrapper = styled.footer`
  background: var(--bg-light);
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  gap: 2em;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 5% 0;
  color: var(--blue);

  @media screen and (max-width: 800px) {
    color: var(--bg-white);
    background-color: gray;
    padding: 12% 0;
  }
`;
