import React, { useState } from "react";
import tenis from "../img/tenis.png";
import {
  ContainerItem,
  ImgItem,
  ItemContent,
  ItemButtons,
  BtnItem,
  ItemContentInput,
} from "../Component/style/Item";

export default function Item() {
  const [alterar, setAlterar] = useState(false);

  return (
    <>
      <ContainerItem>
        <ImgItem>
          <img src={tenis} alt="" />
        </ImgItem>
        {alterar ? (
          <ItemContent className="itemContentInput">
            <div className="textContent">
              <label htmlFor="">Novo Nome</label>
              <input type="text" placeholder="Tênis Adidas" />
              <label htmlFor="">Novo Valor</label>
              <input type="number" name="" id="" placeholder="R$ 399,90" />
            </div>

            <ItemButtons className="itemButtonsInput">
              <BtnItem className="btnInput">Editar</BtnItem>
              <BtnItem className="btnInput">Deletar</BtnItem>
              <BtnItem className="btnInput">Voltar</BtnItem>
            </ItemButtons>
          </ItemContent>
        ) : (
          <>
            <ItemContent>
              <h1>Tênis Adidas</h1>
              <div className="preco">
                <p className="de">R$ 599,90</p>
                <p>
                  <span>R$</span> 399,90
                </p>
              </div>
            </ItemContent>
            <ItemButtons>
              <BtnItem
                onClick={() => {
                  setAlterar(true);
                }}
              >
                Alterar
              </BtnItem>
            </ItemButtons>
          </>
        )}
      </ContainerItem>
    </>
  );
}
