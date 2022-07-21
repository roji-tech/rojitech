import styled from "styled-components";

export const ButtonStyle = styled.button`
  height: 40px;
  margin: 10px 10px 0 10px;
  cursor: pointer;
  position: relative;
  border: none;
  padding: 15px 24px;
  padding: 8px;
  font-size: 1rem;
  outline: none;
  border-radius: 6px;
  color: var(--dark);
  background-color: var(--blue);
  box-shadow: -6px 6px 0 1px var(--bg-blue);

  /* @media screen and (max-width: 800px) {
    box-shadow: -6px 6px 0 1px var(--bg-light);
    background-color: var(--blue);
    color: var(--bg-light);
  } */

  :hover {
    background: var(--lightB);
  }

  :active {
    background: var(--lightB);
    top: 3px;
    left: -3px;
    box-shadow: -3px 3px 0 var(--bg-light);
  }

  ::before {
    position: absolute;
    display: block;
    content: "";
    height: 0;
    width: 0;
    border: solid 6px transparent;
    border-right: solid 6px var(--blue);
    border-left-width: 0px;
    border-radius: 6px;
    background: none;
    top: 0px;
    left: -6px;

    @media screen and (max-width: 800px) {
      border-right: solid 6px var(--bg-blue);
    }
  }

  ::after {
    position: absolute;
    display: block;
    content: "";
    height: 0;
    width: 0;
    border: solid 6px transparent;
    border-top: solid 6px var(--blue);
    border-bottom-width: 0px;
    background: none;
    right: 0;
    bottom: -6px;
    border-radius: 6px;

    @media screen and (max-width: 800px) {
      border-top: solid 6px var(--bg-blue);
    }
  }

  :active::before {
    border: solid 3px transparent;
    border-right: solid 3px var(--bg-light);
    border-left-width: 0px;
    left: -3px;
  }

  :active::after {
    border: solid 3px transparent;
    border-top: solid 3px var();
    border-bottom-width: 0px;
    bottom: -3px;
  }

  span {
    font-weight: 1000;
  }

  @keyframes btnAnim {
    0% {
      color: var(--bg-lighter);
    }
    50% {
      color: var(--bg-light-1);
    }
    100% {
      color: var(--bg-light);
    }
  }
`;
