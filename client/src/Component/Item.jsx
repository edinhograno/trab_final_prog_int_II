import React, { useState, useEffect } from "react";
import {
  ContainerItem,
  ItemContent,
  ItemButtons,
  BtnItem,
  ContainerProduct,
} from "../Component/style/Item";
import CadastroItem from "./CadastroItem";
import Axios from "axios";

export default function Item() {
  const [alterar, setAlterar] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [tenis, setTenis] = useState([]);
  const [id, setId] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [nome, setNome] = useState("");
  const [valor, setValor] = useState(0);
  const [novoValor, setNovoValor] = useState(0);
  const [img, setImg] = useState("");

  useEffect(() => {
    Axios.get("http://localhost:3001/tenis")
      .then((response) => {
        setTenis(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [isOpen]);

  const deleteTenis = () => {
    Axios.delete(`http://localhost:3001/delete?id=${id}&img=${img}`)

      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const updateTenis = () => {
    if (nome !== null && valor !== null) {
      Axios.put(`http://localhost:3001/update?id=${id}`, {
        nome: nome,
        valor: valor,
        novoValor: novoValor,
      })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <>
      <ContainerProduct className="w-1200">
        {isVisible ? (
          <>
            <button className="btn-add" onClick={() => setIsOpen(true)}>
              Adicionar Produto
            </button>
            <CadastroItem isOpen={isOpen} setIsOpen={setIsOpen} />
          </>
        ) : null}
        <ContainerItem>
          {tenis.map((val) => {
            return (
              <>
                {alterar ? (
                  <>
                    {id === val.id && (
                      <ItemContent className="itemContentInput">
                        <div className="imgContent">
                          <img src={val.img} alt="" />
                        </div>
                        <div className="textContent">
                          <label htmlFor="">Novo Nome</label>
                          <input
                            type="text"
                            placeholder={val.nome}
                            onChange={(e) => {
                              setNome(e.target.value);
                            }}
                          />
                          <label htmlFor="">Novo Valor</label>
                          <input
                            type="number"
                            name=""
                            id=""
                            placeholder={val.valorNovo}
                            onChange={(e) => {
                              setNovoValor(e.target.value);
                              setValor(val.valorNovo);
                            }}
                          />
                        </div>

                        <ItemButtons className="itemButtonsInput">
                          <BtnItem
                            className="btnInput"
                            onClick={() => {
                              updateTenis();
                              setAlterar(false);
                              setIsVisible(true);
                            }}
                          >
                            Editar
                          </BtnItem>
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
                      <img src={val.img} alt="" />
                    </div>
                    <ItemContent className="itemcontent-item">
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
                          setImg(val.img);
                          console.log(val.img);
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
