import styled from "styled-components";

const NavStyle = styled.nav`
  background: rgba(0, 0, 0, 0.3);
  width: max-content;
  display: block;
  padding: 0.5em 1.4em;
  position: fixed;
  z-index: 990;
  left: 50%;
  transform: translateX(-50%);
  bottom: 2rem;
  display: flex;
  border-radius: 3rem;
  backdrop-filter: blur(15px);

  @media screen and (max-width: 400px) {
    padding: 0.5em 1em;
  }

  a,
  div {
    background-color: transparent;
    padding: 0.8rem;
    border-radius: 50%;
    display: flex;
    color: var(--light);
    position: relative;
    z-index: 991;
    cursor: pointer;

    ::after {
      content: attr(data);
      width: max-content;
      height: max-content;
      position: absolute;
      padding: 2px 5px;
      color: ${({ lightMode }) => (!lightMode ? "var(--light)" : "var(--white)")};
      top: -25px;
      left: 0;
      opacity: 0;
      border-radius: 20px;
      background: ${({ lightMode }) =>
        !lightMode ? "var(--blue)" : "var(--dark)"};
      transition: opacity 0.4s ease-in-out;
      z-index: 993;
    }

    :hover::after {
      opacity: 1;
    }

    :hover {
      background-color: rgba(0, 0, 0, 0.5);
    }

    @media screen and (max-width: 400px) {
      padding: 0.6rem;
    }
  }

  .active {
    background-color: rgba(0, 0, 0, 0.7);
  }

  .myLink {
    text-decoration: none;
    padding: 0;
    margin: 0;
  }
`;

export default NavStyle;
