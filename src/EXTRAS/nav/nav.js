import styled from "styled-components";

const NavStyle = styled.nav`
  background: rgba(0, 0, 0, 0.3);
  width: max-content;
  display: block;
  padding: 0.5em 1.4em;
  position: fixed;
  z-index: 2;
  left: 50%;
  transform: translateX(-50%);
  bottom: 2rem;
  display: flex;
  border-radius: 3rem;
  backdrop-filter: blur(15px);

  a,
  div {
    background-color: transparent;
    padding: 0.8rem;
    border-radius: 50%;
    display: flex;
    color: var(--light);

    :hover {
      background-color: rgba(0, 0, 0, 0.5);
    }
  }

  .active {
    background-color: var(--blue);
  }
`;

export default NavStyle;
