import styled from "styled-components";

export const ProjectStyle = styled.section`
  background: var(--bg-white);
  padding: 10%;
  padding-left: 10%;
  display: flex;
  flex-direction: column;
  /* justify-content: center;
  align-items: center; */
  width: 100%;
  /* color: var(--bg-white); */

  div.projects {
    gap: 2em;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 5% 10%;
    @media screen and (max-width: 800px) {
    }
  }

  @media screen and (max-width: 800px) {

  }
`;

export const ProjectBoxStyle = styled.div`
  width: 300px;
  height: 300px;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  padding: 8%;
  background-color: var(--lightB);
`;
