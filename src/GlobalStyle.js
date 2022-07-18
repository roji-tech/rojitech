import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
  --bg-white: #fff;
  --lg-white: #ffffff90;
  --bg-light:	 #D3DCF8;
  --bg-lighter: #d7e1fc;
  --blue: 	#0749ff;
  --lightB: 	#5482ff;
  }

  :root {
    width: 99.99%;
    display: flex;
    justify-content: center;
    background-color: var(--bg-white);
  }

  * {
  padding: 0;
  border: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}

  body {
    background-color: var(--bg-white);
    width: 99.95%;

    
    margin: 0;
    padding: 0;
    /* color: var(--bg-light); */
  }
  p{
  }
  
  .satisfy{
    /* font-family: 'Lato', sans-serif; */
    font-family: "Satisfy", cursive;
  }

  /* =========================
      CUSTOM 3D TITLE
    ========================= */

  .custom-3D-title {
    font-size: 4em;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: #5482ff;
    -webkit-transform: skew(-5deg, -5deg) rotate(5deg);
    transform: skew(-5deg, -5deg) rotate(5deg);
    -webkit-transform-origin: center center;
    transform-origin: center center;
    text-shadow: 1px 1px #2ea9be, 2px 2px #2ea9be, 4px 4px #2ea9be,
      5px 5px #2ea9be, 4px 4px #195eb3, 6px 6px #195eb3, 3px 3px #195eb3,
      8px 8px #195eb3, 9px 9px #195eb3, 10px 10px #195eb3;
  }


`;

export default GlobalStyle;

export const Heading = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: "center";
  align-items: center;
  gap: 5px;
`;

export const Heading2 = styled.div`
  width: 100%;
  background-color: gold;
  display: flex;
  flex-direction: column;
  justify-content: "center";
  align-items: flex-start;
  gap: 5px;
`;
