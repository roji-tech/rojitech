import styled from "styled-components";

export const SocialStyle = styled.div`
  padding: 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 5%;
  justify-content: ${(prop) => prop.j_content};

  .social {
    background-color: var(--bg-light);
    border-radius: 50%;
    padding: 3px;
    transition: 0.3s all ease-in-out;

    :hover {
      transform: scale(1.3);
    }
  }
  
  @media screen and (max-width: 800px) {
    .socials {
      margin: 30px 0 0;
      justify-content: center;
    }
  }
`;
