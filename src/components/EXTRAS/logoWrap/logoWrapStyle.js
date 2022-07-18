import styled from "styled-components";

export const LogoWrap = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
  margin-bottom: 10px;
`;
export const LogoImg = styled.img`
  border: none;
  background: black;
  border-radius: 50%;
  padding: none;
  width: auto;
  height: 100px;
  margin-right: 2rem;
`;

export const LogoName = styled.p`
  margin: 0;
  font-size: 2em;
  letter-spacing: 2px;
  font-weight: 1000;
  font-family: cursive, Tahoma, sans-serif;
  color: var(--bg-white);
`;
