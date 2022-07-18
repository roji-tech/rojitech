import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
  --bg-white: #fff;
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
