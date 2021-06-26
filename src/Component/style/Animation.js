import styled from "styled-components";

const corLaranja = "#ff6700";
const corRoxa = "#4e0093";

export const ContainerAnimation = styled.div`
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(120deg, ${corRoxa}, ${corLaranja} 120%);

  .containerAnimationRocket {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: flex-end;
    pointer-events: none;

    @media only screen and (min-width: 768px) {
      max-width: 40rem;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }

  .containerAnimationArrow {
    position: absolute;
    right: 2%;
    bottom: 2%;
    width: 15%;
    z-index: 1;
    max-width: 5rem;
    pointer-events: none;
  }

  .onda {
    object-fit: cover;
    width: 100%;
    height: 40%;
    position: absolute;
    bottom: -0.1rem;

    @media only screen and (min-width: 575px) {
      height: 100%;
      width: 100%;
    }
  }
`;
