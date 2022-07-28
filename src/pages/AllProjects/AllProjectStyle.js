import styled from "styled-components";

const AllProjectStyle = styled.section`
  padding: 5% 0;
  display: flex;
  flex-direction: column;
  gap: 5rem;
  /* justify-content: center;
  align-items: center; */

  .head {
    display: flex;
    flex-direction: column;
    align-items: center;

    .langs {
      font-size: 1.1rem;
    }
  }

  .wrapper {
    display: flex;
    flex-direction: column;
  }

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

    .morePro {
      font-size: 0.8rem;
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
export default AllProjectStyle;
