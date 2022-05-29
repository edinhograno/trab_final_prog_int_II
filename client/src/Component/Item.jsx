import React, { useState, useEffect } from "react";
import {
  ContainerItem,
  ItemContent,
  ItemButtons,
  BtnItem,
  ContainerProduct,
} from "../Component/style/Item";
import { FcCancel } from "react-icons/fc";
import { BsCheckCircle } from "react-icons/bs";
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
  const [confirmDelete, setConfirmDelete] = useState("");
  const [del, setDel] = useState(false);
  const [update, setUpdate] = useState("");

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
    if (confirmDelete === "delete") {
      Axios.delete(`http://localhost:3001/delete?id=${id}&img=${img}`)

        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });

      setIsVisible(true);
      setAlterar(false);
    } else {
      setConfirmDelete("Texto digitado inválido");
    }
  };

  const updateTenis = () => {
    if (nome !== "" && valor !== "") {
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
      setUpdate("Tênis editado com sucesso!");
      setDel(false);
    } else {
      setUpdate("Digite os valores a serem alterados");
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
                            name="newname"
                            id="newname"
                            placeholder={val.nome}
                            onChange={(e) => {
                              setNome(e.target.value);
                            }}
                          />
                          <label htmlFor="">Novo Valor</label>
                          <input
                            type="text"
                            name="newvalue"
                            id="newvalue"
                            placeholder={val.valorNovo
                              .toFixed(2)
                              .replace(".", ",")}
                            onChange={(e) => {
                              setNovoValor(e.target.value);
                              setValor(val.valorNovo);
                            }}
                          />
                        </div>
                        <div className="update">
                          <small className="msgUpdate">{update}</small>
                        </div>

                        <ItemButtons className="itemButtonsInput">
                          <BtnItem
                            className="btnInput"
                            id="btnUpdate"
                            onClick={() => {
                              updateTenis();
                              setDel(false);
                            }}
                          >
                            Editar
                          </BtnItem>
                          <BtnItem
                            onClick={() => {
                              setDel(true);
                              setUpdate("");
                            }}
                            className="btnInput"
                            id="btnDelete"
                          >
                            Deletar
                          </BtnItem>
                          <BtnItem
                            onClick={() => {
                              setAlterar(false);
                              setIsVisible(true);
                              setDel(false);
                            }}
                            className="btnInput"
                            id="btnCancel"
                          >
                            Voltar
                          </BtnItem>
                        </ItemButtons>
                        {del ? (
                          <div className="container-confirm-delete">
                            <div className="confirm-delete">
                              <label htmlFor="delete">
                                Escreva <span>delete</span> para deletar o tênis
                              </label>
                              <input
                                type="text"
                                name="delete"
                                id="delete"
                                onChange={(e) => {
                                  setConfirmDelete(e.target.value);
                                }}
                              />
                            </div>
                            <div className="confirm-delete-buttons">
                              <button
                                className="delete-btn-confirm"
                                onClick={() => deleteTenis()}
                              >
                                <BsCheckCircle />
                              </button>
                              <button
                                className="delete-btn-cancel"
                                onClick={() => setDel(false)}
                              >
                                <FcCancel />
                              </button>
                              {confirmDelete !== "delete" &&
                              confirmDelete !== "" ? (
                                <small className="msg-invalid">
                                  Texto digitado inválido
                                </small>
                              ) : confirmDelete === "delete" ? (
                                <small>Você irá deletar o tênis</small>
                              ) : null}
                            </div>
                          </div>
                        ) : null}
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
                        <p className="de">
                          R$ {val.valorAntigo.toFixed(2).replace(".", ",")}
                        </p>
                        <p>
                          <span>R$</span>{" "}
                          {val.valorNovo.toFixed(2).replace(".", ",")}
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
                        id={`item-${val.id}`}
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
