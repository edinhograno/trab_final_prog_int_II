import styled from "styled-components";

const corLaranja = "#ff6700";
const corRoxa = "#4e0093";

export const ContainerProduct = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  /* background-color: red; */

  .btn-add {
    height: 3rem;
    max-width: 35rem;
    width: 100%;
    border: none;
    background-color: ${corLaranja};
    color: #fff;
    cursor: pointer;
    /* border-radius: 1rem; */
    font-size: 1rem;
    transition: background-color, color 0.3s ease-in-out;
    font-weight: 700;
    z-index: 2;

    &:hover {
      background-color: ${corRoxa};
      color: #fff;
    }

    @media only screen and (min-width: 530px) {
      border-radius: 1.2rem;
      margin-left: 2.2rem;
    }
  }
`;

export const ContainerItem = styled.div`
  margin-top: 2.5rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  height: 50%;
  /* max-width: 25rem; */

  .item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-width: 20rem;
    max-width: 22.5rem;
    flex: 1;
    margin-top: 3rem;
    margin-bottom: 3rem;
    padding: 1rem;
    margin-left: 0.4rem;
    position: relative;
    border: 2px solid ${corRoxa};
    border-radius: 0.5rem;
    transition: background-color, transform 0.3s ease-in-out;
    background-color: rgba(0, 0, 0, 0.05);

    &:hover {
      transform: scale(1.02);
      background-color: #fff;

      h1 {
        opacity: 1;
      }
    }
    h1 {
      margin: 0;
      font-size: 2.5rem;
      color: ${corLaranja};
      opacity: 0.8;
      transition: opacity 0.3s ease-in-out;
      /* background-color: red; */
    }

    .containerImg {
      display: flex;
      justify-content: center;
      /* background-color: red; */
      width: 100%;
      img {
        max-height: 10rem;
      }
    }
  }

  button {
    cursor: pointer;
    font-weight: 700;
    transition: background-color, color 0.3s ease-in-out;

    &:hover {
      background-color: ${corLaranja};
      color: #fff;
    }
  }

  .itemContentInput {
    order: 2;
    position: relative;
    /* background-color: red; */
    max-width: 20rem;
    margin-bottom: 2rem;
    border: 2px solid ${corRoxa};
    border-radius: 0.5rem;

    .imgContent {
      width: 100%;
      /* background-color: yellow; */
      img {
        width: 100%;
      }
    }

    .textContent {
      display: flex;
      flex-direction: column;
      padding: 1rem;
      /* background-color: blue; */

      label {
        font-size: 1.2rem;
        color: ${corRoxa};
        font-weight: bold;
        margin-bottom: 0.5rem;

        &:nth-child(3) {
          margin-top: 0.5rem;
        }
      }

      input {
        padding: 0.5rem 0;
        font-size: 1rem;
        padding-left: 0.5rem;
        border-radius: 0.5rem;
        border: 1px solid ${corRoxa};

        &:focus {
          outline: none;
          border-color: ${corRoxa};
          box-shadow: 0 0 0.2rem ${corRoxa};
        }
      }
    }
    .itemButtonsInput {
      margin: 1rem 0;
      .btnInput {
        padding: 0.5rem 2rem;
        border-radius: 0.8rem;
      }
    }

    @media only screen and (min-width: 768px) {
      max-width: 30rem;
    }
  }
`;
export const ItemContent = styled.div`
  color: ${corRoxa};
  width: 100%;
  height: 80%;
  /* background-color: yellow; */
  order: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .preco {
    padding: 1rem;
  }

  .preco {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .de {
    font-size: 1.2rem;
    text-decoration: line-through;
    color: #c9c9c9;
  }
  p {
    font-size: 2rem;
    margin: 0;
    font-weight: 500;

    span {
      font-weight: 700;
      font-size: 2.5rem;
    }
  }
`;
export const ItemButtons = styled.div`
  width: 100%;
  /* background-color: purple; */
  order: 3;
  display: flex;
  align-items: center;
  justify-content: space-around;

  .btnInput {
    display: flex;
    flex: 1;
    max-width: 30%;
    justify-content: center;
  }
`;
export const BtnItem = styled.button`
  padding: 1rem 4rem;
  border: none;
  background-color: ${corRoxa};
  color: ${corLaranja};
  border-radius: 1rem;
  font-size: 1rem;
`;
