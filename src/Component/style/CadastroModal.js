import styled from "styled-components";

const corLaranja = "#ff6700";
const corRoxa = "#4e0093";

export const CadastroModal = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: center;

  .containerCadastro {
    background-color: #fff;
    min-width: 18.75rem;
    width: 30%;
    height: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    justify-content: center;

    .btn-close {
      display: flex;
      justify-content: center;
      align-items: center;
      border: none;
      height: 3rem;
      width: 3rem;
      position: absolute;
      right: 1rem;
      top: 1rem;
      cursor: pointer;
      background: none;

      .icon {
        font-size: 2rem;
        color: ${corRoxa};
        transition: transform 0.3s ease-in-out;

        &:hover {
          transform: rotate(90deg);
        }
      }
    }

    .items {
      /* background-color: red; */
      max-width: 20rem;

      .itemModal {
        margin: 0.5rem;
        flex: 1;
        display: flex;
        flex-direction: column;

        label {
          font-size: 0.8rem;
          padding: 0 0.4rem 0 0.2rem;
          margin-left: 0.1rem;
          color: ${corRoxa};
          pointer-events: none;
          position: absolute;
          transform: translate(0, -0.5rem) scale(1);
          transform-origin: top left;
          transition: all 0.2s ease-out;
          background-color: #fff;
        }
        input {
          height: 2rem;
          padding: 0.875rem 1rem 0 0.625rem;
          outline: 0;
          border: 0.063rem solid #c9c9c9;
          border-radius: 0.25rem;
          background-color: #fff;
          font-size: 1rem;

          &:focus {
            outline: none;
            border: 0.063rem solid ${corRoxa};
          }
        }
        button {
          width: 100%;
          height: 2.5rem;
          border-radius: 2rem;
          border: none;
          cursor: pointer;
          background-color: ${corRoxa};
          color: #fff;
          transition: background-color 0.3s ease-in-out;

          &:hover {
            background-color: ${corLaranja};
          }
        }
      }

      .itemModalImg {
        display: flex;
        margin: 0 auto;
        width: 92.5%;
        height: 2.5rem;
        outline: 0;
        border: 0.063rem solid #c9c9c9;
        border-radius: 0.25rem;
        font-size: 1rem;
        margin-bottom: 1rem;
        input {
          display: none;
        }
        label {
          cursor: pointer;
          width: 100%;
          display: flex;
          align-items: center;
          padding-left: 0.625rem;
          color: ${corRoxa};
          transition: background-color 0.3s ease-in-out;

          &:hover {
            background-color: ${corLaranja};
            color: #fff;

            .icon {
              color: #fff;
            }
          }

          .icon {
            margin-right: 0.2rem;
            color: ${corLaranja};
            transition: background-color 0.3s ease-in-out;
          }
        }
      }
    }
  }
`;
