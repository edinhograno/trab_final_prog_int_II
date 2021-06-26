import React, { useState, useEffect } from "react";
import imgTenis from "../img/tenis.png";
import {
  ContainerItem,
  ImgItem,
  ItemContent,
  ItemButtons,
  BtnItem,
  ContainerProduct,
} from "../Component/style/Item";
import Cadastro from "./Cadastro";
import Axios from "axios";

export default function Item() {
  const [alterar, setAlterar] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [tenis, setTenis] = useState([]);
  const [id, setId] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    Axios.get("http://localhost:3001/tenis")
      .then((response) => {
        setTenis(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  const deleteTenis = () => {
    Axios.delete(`http://localhost:3001/delete?id=${id}`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <ContainerProduct className="w-1200">
        {isVisible ? (
          <>
            <button className="btn-add" onClick={() => setIsOpen(true)}>
              Adicionar Produto
            </button>
            <Cadastro isOpen={isOpen} setIsOpen={setIsOpen} />
          </>
        ) : null}
        <ContainerItem>
          {tenis.map((val, key) => {
            return (
              <>
                {alterar ? (
                  <>
                    {id === val.id && (
                      <ItemContent className="itemContentInput">
                        <div className="imgContent">
                          <img src={imgTenis} alt="" />
                        </div>
                        <div className="textContent">
                          <label htmlFor="">Novo Nome</label>
                          <input type="text" placeholder={val.nome} />
                          <label htmlFor="">Novo Valor</label>
                          <input
                            type="number"
                            name=""
                            id=""
                            placeholder={val.valorNovo}
                          />
                        </div>

                        <ItemButtons className="itemButtonsInput">
                          <BtnItem className="btnInput">Editar</BtnItem>
                          <BtnItem
                            onClick={() => {
                              deleteTenis();
                              setAlterar(false);
                              setIsVisible(true);
                            }}
                            className="btnInput"
                          >
                            Deletar
                          </BtnItem>
                          <BtnItem
                            onClick={() => {
                              setAlterar(false);
                              setIsVisible(true);
                            }}
                            className="btnInput"
                          >
                            Voltar
                          </BtnItem>
                        </ItemButtons>
                      </ItemContent>
                    )}
                  </>
                ) : (
                  <div className="item">
                    <h1>{val.nome}</h1>
                    <div className="containerImg">
                      <img src={imgTenis} alt="" />
                    </div>
                    <ItemContent>
                      <div className="preco">
                        <p className="de">R$ {val.valorAntigo}</p>
                        <p>
                          <span>R$</span> {val.valorNovo}
                        </p>
                      </div>
                    </ItemContent>
                    <ItemButtons>
                      <BtnItem
                        onClick={() => {
                          setAlterar(true);
                          setId(val.id);
                          console.log(val.id);
                          setIsVisible(false);
                        }}
                      >
                        Alterar
                      </BtnItem>
                    </ItemButtons>
                  </div>
                )}
              </>
            );
          })}
        </ContainerItem>
      </ContainerProduct>
    </>
  );
}
