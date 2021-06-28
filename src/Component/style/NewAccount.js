import styled from "styled-components";

const corLaranja = "#ff6700";
const corRoxa = "#4e0093";

export const Account = styled.div`
  background-image: linear-gradient(120deg, ${corRoxa}, ${corLaranja});
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .master-container {
    background-color: #fff;
    max-width: 38rem;
    min-width: 20rem;
    min-height: 36rem;
    width: 80%;
    height: 70%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;

    .logo {
      position: absolute;
      bottom: 34.5rem;
      width: 12rem;
      background-color: ${corRoxa};

      @media only screen and (min-width: 500px) {
        width: 15rem;
        left: -7.5rem;
        bottom: 7rem;
        transform: rotate(-90deg);
      }
    }

    .titulo {
      width: 80%;
      display: flex;
      flex-direction: column;
      h1 {
        font-weight: 400;
        color: ${corRoxa};
      }
    }

    .container {
      width: 80%;
      height: 70%;
      display: flex;
      justify-content: space-around;
      flex-direction: column;

      .container-dados {
        display: flex;
        flex-wrap: wrap;
        position: relative;

        &:nth-child(2) {
          flex-direction: column;
        }

        &:nth-child(3) {
          padding-bottom: 1.2rem;
        }

        .password-btn {
          position: absolute;
          left: 0;
          bottom: 0;
          width: 10rem;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          border: none;
          background-color: transparent;

          .eye-pass {
            font-size: 1.2rem;
            color: #c9c9c9;
            margin-right: 0.2rem;
            color: #8d61b4;
            cursor: pointer;
          }

          &:after {
            content: "Mostrar Senha";
            color: #8d61b4;
          }
        }
      }

      .content {
        margin: 0.5rem;
        flex: 1;
        display: flex;
        flex-direction: column;

        .input-content {
          height: 2rem;
          padding: 0.875rem 1rem 0 0.625rem;
          outline: 0;
          border: 0.063rem solid #c9c9c9;
          border-radius: 0.25rem;
          background-color: #fff;
          font-size: 1rem;
          color: #6d6d6d;

          &:focus {
            outline: none;
            border: 0.063rem solid ${corRoxa};
          }
        }

        .content-label {
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

          .asterisco {
            color: #ff0000;
          }
        }

        .btn-create-account {
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

        .btn-login {
          text-decoration: none;
          font-weight: 500;
          opacity: 0.8;
          transition: opacity 0.3s ease-in-out;
          font-size: 0.8rem;
          display: flex;
          flex-direction: column;

          :hover {
            opacity: 1;
          }

          @media only screen and (min-width: 768px) {
            flex-direction: row;

            span {
              margin-left: 0.2rem;
            }
          }
        }
      }
    }
  }
`;
