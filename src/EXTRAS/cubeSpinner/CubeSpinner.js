import styled from "styled-components";

const CubeSpinnerStyle = styled.div`
  --anim-width: ${({ a_width }) => (a_width ? a_width : "100px")};
  position: relative;

  width: 100%;
  height: 90%;

  overflow: hidden;
  z-index: 200;

  @media screen and (max-width: 1100px) {
    --anim-width: 50px;
    height: 100%;
  }

  @media screen and (max-width: 800px) {
    --anim-width: ${({ a_width }) => (a_width ? a_width : "100px")};
    height: 100%;
  }

  .cubespinner {
    animation-name: spincube;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
    animation-duration: 12s;
    transform-style: preserve-3d;
    /* transform-origin: 50px 50px 30px; */
    margin-left: calc(50%);

    @media screen and (min-width: 1600px) {
      margin-left: calc(50%);
    }

    @media screen and (max-width: 800px) {
      height: 100%;
      margin-left: 0;
    }

    div {
      position: absolute;
      width: ${({ width }) => (width ? width : "200px")};
      aspect-ratio: 1/1;
      border: 1px solid #ccc;
      background: ${({ lightMode }) =>
        !lightMode ? "rgba(255, 255, 255, 0.4)" : "var(--dark-trans)"};
      text-align: center;
      font-size: 100px;
      display: flex;
      justify-content: center;
      align-items: center;
      box-shadow: 0 0 20px 0px lightyellow;

      @media screen and (max-width: 1100px) {
        font-size: 70px;
        width: 100px;
        height: 100px;
      }

      @media screen and (max-width: 800px) {
        font-size: 70px;
        width: 200px;
        height: 200px;
      }
    }

    .face1 {
      transform: translateZ(var(--anim-width));
      color: #dd0031;
    }
    .face2 {
      transform: rotateY(90deg) translateZ(var(--anim-width));
      color: #f06529;
    }
    .face3 {
      transform: rotateY(90deg) rotateX(90deg) translateZ(var(--anim-width));
      color: #28a4d9;
    }
    .face4 {
      transform: rotateY(180deg) rotateZ(90deg) translateZ(var(--anim-width));
      color: #5ed4f4;
    }
    .face5 {
      transform: rotateY(-90deg) rotateZ(90deg) translateZ(var(--anim-width));
      color: #efd81d;
    }
    .face6 {
      transform: rotateX(-90deg) translateZ(var(--anim-width));
      color: #ec4d28;
    }
  }

  @keyframes spincube {
    from,
    to {
      transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
    }
    16% {
      transform: rotateY(-90deg);
    }
    33% {
      transform: rotateY(-90deg) rotateZ(90deg);
    }
    50% {
      transform: rotateY(-180deg) rotateZ(90deg);
    }
    66% {
      transform: rotateY(-270deg) rotateX(90deg);
    }
    83% {
      transform: rotateX(90deg);
    }
  }
`;

export default CubeSpinnerStyle;
