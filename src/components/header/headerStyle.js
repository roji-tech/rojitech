import styled from "styled-components";

export const HeaderContainer = styled.div`
  // background: var(--bg-dark);
  color: var(--bg-white);
  position: relative;
  padding: 0 15px 20px;
  margin-bottom: 40px;
`;

export const HeaderWrap = styled.div`
  // background: var(--bg-dark);
  // max-height: 90vh;
  color: var(--bg-white);
  display: grid:
  padding: 5%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  text-align: center;
  align-items: center;

  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    }
  `;

export const HeaderTexts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 80%;
  weight: 100%;
  font-size: 2em;
  font-family: "Times New Roman", Times, serif;

  @media screen and (max-width: 600px) {
    margin-top: 1em;
    flex-direction: column;
    gap: 1em;
  }

  .p1 {
    font-size: var(--fontMed);
    font-family: cursive, poppins, "Times New Roman", Times, serif;

    @media screen and (max-width: 720px) {
      font-size: var(--fontSmall);
    }
  }

  .p2 {
    font-size: var(--fontSuperBig);

    @media screen and (max-width: 720px) {
      font-size: var(--fontBigger);
    }
  }
  .p3 {
    font-size: var(--fontSmall);
    font-family: "cursive", "Courier New", Courier, monospace;
    color: var(--bg-light)
  }

  .job {
    display: inline-block;
    font-weight: 1000;
    font-family: "Times New Roman", Times, serif;
  }
`;
export const HeaderButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  @media screen and (max-width: 600px) {
    margin-bottom: 2em;
    gap: 0.5em;
  }

  @media screen and (max-width: 400px) {
    margin-top: 1em;
    flex-direction: column;
    gap: 0.5em;
  }
`;

export const HeaderImgWrap = styled.div`
  padding: 5px;
  max-height: 90vh;
  z-index: 5;
  width: 100%;
  border-radius: 50%;
  transition: transform 0.4s ease-in-out;

  img {
    width: 90%;
    background-color: blue;
    border-top-right-radius: 40%;
    border-top-left-radius: 50%;
    height: 90%;
    z-index: 5;
    object-fit: cover;
    aspect-ratio: 1/1;
    transition: all 0.3s ease-in-out;
    transform: scale(0.9);
    transition: box-shadow 0.4s ease-in-out;

    :hover {
      // transform: scale(.9);
      box-shadow: 0 0 20px 3px var(--bg-light);
    }
  }

  @media screen and (min-width: 800px) {
    margin: 60px 0;
  }

  @media screen and (min-width: 1300px) {
    transform: translateY(-7%);
  }
`;

