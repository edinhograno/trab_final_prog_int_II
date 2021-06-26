import styled from "styled-components";

export const CadastroModal = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: center;

  .containerCadastro {
    background-color: blue;
    width: 60%;
    height: 60%;
    display: flex;
    flex-direction: column;
    position: relative;
    justify-content: center;

    .btn-close {
      position: absolute;
      right: 1rem;
      top: 1rem;
      cursor: pointer;
    }
  }
`;
