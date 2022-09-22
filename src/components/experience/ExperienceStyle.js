import styled from "styled-components";

const ExperienceStyle = styled.section`
  display: flex;
  flex-direction: column;

  .exps {
    display: flex;
    flex-direction: column;
    gap: 1.1em;

    .exp {
      border-radius: 10px;
      padding: 15px;
      box-shadow: 1px 1px 10px 1px var(--blue);

      .comp {
        display: flex;
        justify-content: space-around;
        align-items: center;
        gap: 20%;
        padding-top: 25px;
        padding-left: 15%;

        span {
          white-space: nowrap;
        }
      }

      .info {
        padding-left: 10%;
        text-align: right;
        margin-top: 5px;
        line-height: 1.2em;
      }
    }
  }
`;

export default ExperienceStyle;
