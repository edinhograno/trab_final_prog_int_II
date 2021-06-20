import styled from "styled-components";

const corLaranja = "#ff6700";
const corRoxa = "#4e0093";

export const ContainerItem = styled.div`
  margin-top: 2.5rem;
  position: relative;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;
  /* background-color: red; */

  .itemContentInput {
    order: 2;
    position: relative;
    /* background-color: red; */

    .textContent {
      display: flex;
      flex-direction: column;
      /* background-color: yellow; */
      padding: 1rem;

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
      }
    }
  }
  .itemButtonsInput {
    margin-top: 1rem;
  }
`;
export const ImgItem = styled.div`
  height: 45vh;
  width: 100%;
  /* background-color: blue; */
  order: 2;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    /* background-color: black; */
    width: 60%;
    transform: rotate(-45deg);
  }
`;
export const ItemContent = styled.div`
  /* display: none; */
  color: ${corRoxa};
  position: absolute;
  width: 100%;
  height: 80%;
  /* background-color: green; */
  order: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h1,
  .preco {
    padding: 1rem;
  }
  h1 {
    margin: 0;
    font-size: 2.5rem;
    /* background-color: red; */
  }
  .preco {
    /* background-color: yellow; */
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
    font-size: 1.5rem;
    /* background-color: blue; */
    margin: 0;

    span {
      font-size: 2rem;
    }
  }
`;
export const ItemButtons = styled.div`
  /* background-color: yellow; */
  order: 3;
  padding: 0 1rem 1rem;
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
  padding: 0.8rem 3rem;
  border: none;
  background-color: ${corRoxa};
  color: ${corLaranja};
  border-radius: 1rem;
  font-size: 1rem;
`;
