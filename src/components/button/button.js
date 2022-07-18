import styled from "styled-components";

export const ButtonStyle = styled.button`
  height: 40px;
  margin: 10px 10px 0 10px;
  color: var(--btn-color-1);
  background-color: var(--bg-light);
  cursor: pointer;
  position: relative;
  position: relative;
  border: none;
  color: white;
  padding: 15px 24px;
  padding: 8px;
  font-size: 1rem;
  box-shadow: -6px 6px 0 blue;
  outline: none;
  border-radius: 6px;
  background: var(--btn-color-4);
  box-shadow: -6px 6px 0 1px #0000ff;

  :hover {
    background: var(--btn-color-2);
  }

  :active {
    background: var(--btn-color-2);
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
    border-right: solid 6px rgba(0, 0, 255, 0.77);
    border-left-width: 0px;
    border-radius: 6px;
    background: none;
    top: 0px;
    left: -6px;
  }

  ::after {
    position: absolute;
    display: block;
    content: "";
    height: 0;
    width: 0;
    border: solid 6px transparent;
    border-top: solid 6px blue;
    border-bottom-width: 0px;
    background: none;
    right: 0;
    bottom: -6px;
    border-radius: 6px;
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
