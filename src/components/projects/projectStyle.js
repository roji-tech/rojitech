import styled from "styled-components";

export const ProjectStyle = styled.section`
  /* background: var(--bg-white); */
  padding: 10%;
  padding-left: 10%;
  display: flex;
  flex-direction: column;
  /* justify-content: center;
  align-items: center; */
  width: 100%;
  /* color: var(--bg-white); */

  .projects {
    gap: 2em;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 5% 10%;
    @media screen and (max-width: 800px) {
    }
  }

  .seeMore {
    display: flex;
    justify-content: end;

    .morePro {
      font-size: .8rem;
      border-radius: 20px;
      text-decoration: none;
      padding: 10px;
      background-color: ${({ lightMode }) =>
        !lightMode ? "var(--blue)" : "var(--dark)"};
      color: var(--white);
      font-style: oblique;
    }
  }

  @media screen and (max-width: 800px) {
  }
`;

export const ProjectBoxStyle = styled.div`
  width: 400px;
  height: 450px;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  padding: 10px 15px;
  background-color: var(--bg-blue);
  display: grid;
  grid-template-rows: 1fr 5fr 3fr 1fr 1fr;

  .appname {
    text-align: center;
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
    margin-top: 3px;
  }

  .langs {
    text-align: center;
    margin-top: 3px;
    padding-top: 3px;
    color: var(--blue);
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
