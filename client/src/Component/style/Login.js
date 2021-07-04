import styled from "styled-components";

const corLaranja = "#ff6700";
const corRoxa = "#4e0093";

export const LoginPage = styled.div`
  padding: 4rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100vh;

  background-image: linear-gradient(120deg, ${corRoxa}, ${corLaranja});

  .btn-social {
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    font-size: 0.8rem;
    border: none;
    height: 2.5rem;
    width: 12rem;
    border-radius: 2rem;
    cursor: pointer;
    /* background-color: #c9c9c9; */
    color: #fff;
    transition: opacity 0.3s ease-in-out;
  }

  .icon {
    color: #fff;
    font-size: 1.5rem;
  }

  button.btnVoltar,
  button.icon {
    opacity: 0.5;
    &:hover {
      opacity: 1;
    }
  }
`;
export const LoginInfo = styled.div`
  display: flex;
  min-width: 18.75rem;
  max-width: 30rem;
  flex-direction: column;
  align-items: center;
  width: 55%;
  height: auto;
  border-radius: 0.5rem;
  background-color: #fff;
  box-shadow: 0rem 0rem 0.5rem #000;
  transition: box-shadow 1.5s ease-in-out;

  &:hover {
    box-shadow: -0.2rem 0.2rem 2.5rem #000;
  }

  .w-80 {
    width: 80%;
  }

  .espacamento {
    margin: 1rem 0;

    @media only screen and (min-width: 768px) {
      margin: 2rem 0;
    }
  }

  .titulo {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: auto;

    h1 {
      margin: 0;
      color: ${corRoxa};
      font-size: 2.5rem;
      font-weight: 400;
    }

    small {
      color: ${corRoxa};
      text-transform: uppercase;
      font-size: 0.7rem;
    }
  }
`;

export const BtnVoltar = styled.a`
  position: absolute;
  height: 2rem;
  width: 6rem;
  right: 1rem;
  bottom: 1rem;
  font-size: 1rem;
  text-transform: uppercase;

  opacity: 0.5;
  transition: opacity 0.3s ease-in-out;

  &:hover {
    opacity: 1;
  }
`;
export const LoginDados = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: auto;

  .password {
    position: relative;
    .password-btn {
      position: absolute;
      right: 0;
      top: 0.8rem;
      height: 3rem;
      width: 3rem;
      display: flex;
      align-items: center;
      justify-content: center;
      border: none;
      background-color: transparent;

      .eye-pass {
        font-size: 1.5rem;
        color: #c9c9c9;
        cursor: pointer;
      }
    }
  }

  .email,
  .password {
    display: flex;
    flex-direction: column;
  }

  .email input,
  .password input {
    color: #6d6d6d;
    height: 3.5rem;
    padding: 0.875rem 1rem 0 0.625rem;
    outline: 0;
    border: 0.063rem solid #ddd;
    border-radius: 0.25rem;
    background-color: #fff;
    font-size: 1rem;
  }
  .email label,
  .password label {
    font-size: 1rem;
    padding: 0 0.75rem;
    color: #999;
    pointer-events: none;
    position: absolute;
    transform: translate(0, 0.5rem) scale(0.75);
    transform-origin: top left;
    transition: all 0.2s ease-out;
  }

  .failed-message {
    margin-top: 0.2rem;
    color: red;
    display: flex;

    .icon-failed {
      margin-right: 0.2rem;
    }
  }
`;

export const LoginButtons = styled.div`
  height: auto;

  .espacamento-button {
    margin: 0.5rem 0;
  }
`;
export const BtnLogin = styled.div`
  height: 50%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    opacity: 0.8;
    background-color: ${corRoxa};
  }

  button:hover {
    opacity: 1;
  }
`;
export const LoginSocial = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 50%;
  width: 100%;

  button:nth-child(1) {
    opacity: 0.8;
    background-color: #3b5998;
  }

  button:nth-child(2) {
    opacity: 0.8;
    background-color: #db4a39;
  }
  button:hover {
    opacity: 1;
  }
`;
export const NewAccountLogin = styled.div`
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;

  .btn-account {
    color: ${corRoxa};
    opacity: 0.5;
    font-weight: bold;
    text-decoration: none;
    font-size: 0.8rem;
    transition: opacity 0.3s ease-in-out;

    &:hover {
      opacity: 1;
    }
  }
`;
