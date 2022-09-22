import styled from "styled-components";

export const ProjectStyle = styled.section`
  display: flex;
  flex-direction: column;
  /* justify-content: center;
  align-items: center; */

  .projects {
    gap: 2em;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    margin: 4% 1.5%;
    @media screen and (max-width: 1000px) {
    }
  }

  .seeMore {
    display: flex;
    justify-content: end;
    padding-top: 10px;

    .morePro {
      font-size: 0.8rem;
      border-radius: 20px;
      text-decoration: none;
      opacity: 0.99;
      padding: 12px;
      background-color: ${({ lightMode }) =>
        !lightMode ? "var(--blue)" : "var(--dark)"};
      color: var(--white);
      font-style: oblique;
      transition: all 0.2s ease-in-out;
      font-weight: 600;

      :hover {
        opacity: 1;
        transform: scale(1.1);
        font-weight: 1000;
      }
    }
  }

  @media screen and (max-width: 800px) {
  }
`;

export const ProjectBoxStyle = styled.div`
  width: 360px;
  height: 420px;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  padding: 10px 15px;
  background-color: var(--bg-blue);
  display: grid;
  grid-template-rows: 1fr 5fr 3fr 1fr 1fr;
  transition: all 0.3s ease-in-out;

  :hover {
    box-shadow: 1px 1px 10px 5px #ffffff93;
    transform: scale(1.05);
  }

  .appname {
    text-align: center;
    color: #ffffff;
    font-weight: 900;
  }

  .imgBox {
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      background-color: var(--bg-white);
    }
  }

  .desc {
    margin-top: 5px;
    font-size: 1.2rem;
  }

  .langs {
    text-align: center;
    margin-top: 3px;
    padding-top: 3px;
    color: rgb(255, 255, 255);
    font-weight: 800;
  }

  .links {
    text-align: center;
    align-items: center;
    display: grid;
    grid-template-columns: 50% 50%;

    div {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      background-color: ${({ bg, disabled }) => (disabled ? bg : bg)};
      cursor: pointer;

      a {
        text-decoration: none;
        text-align: center;
        width: 80%;
      }
    }

    .livelink {
      background: var(--bg-white);
    }

    .gitlink {
      background: var(--blue);

      a {
        color: white;
      }
    }

    .fade {
      filter: blur(3px);
    }
  }
`;
