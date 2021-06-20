import styled from "styled-components";

const corLaranja = "#ff6700";
const corRoxa = "#4e0093";

export const ContainerHeader = styled.div`
  /* display: none; */
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(120deg, ${corRoxa}, ${corLaranja} 120%);
  pointer-events: none;

  .containerAnimationRocket {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: flex-end;
    z-index: 1;
  }

  .containerAnimationArrow {
    position: absolute;
    right: 2%;
    bottom: 2%;
    z-index: 3;
    width: 15%;
  }

  .onda {
    object-fit: cover;
    width: 100%;
    height: 40%;
    position: absolute;
    bottom: 0;
    z-index: 2;
  }
`;
export const ContentHeader = styled.div`
  display: flex;
  width: 100%;
  height: 8%;
  /* background-color: green; */
`;
export const Logo = styled.div`
  height: 100%;
  width: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: yellow; */
  margin-left: 1rem;
`;
export const BtnContentHeader = styled.button`
  display: none;
`;
