import React, { useState } from "react";
import { CadastroModal } from "./style/CadastroModal";
import { VscChromeClose } from "react-icons/vsc";
import { BsCardImage } from "react-icons/bs";
import { BiErrorAlt } from "react-icons/bi";
import { BsCheckCircle } from "react-icons/bs";
import Axios from "axios";

export default function CadastroItem(props) {
  const [nome, setNome] = useState("");
  const [img, setImg] = useState("");
  const [valor, setValor] = useState(0);
  const [novoValor, setNovoValor] = useState(0);
  const [message, setMessage] = useState("");

  const addTenis = async () => {
    if (nome === "" || img === "" || valor === 0 || novoValor === 0) {
      setMessage("Por favor, preencha todos os campos");
    } else {
      const formData = new FormData();

      formData.append("nome", nome);
      formData.append("img", img);
      formData.append("valor", valor);
      formData.append("novoValor", novoValor);

      await Axios.post("http://localhost:3001/create", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
        .then((response) => {
          setMessage(response.data.message);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <>
      {props.isOpen ? (
        <CadastroModal>
          <div className="containerCadastro">
            <button
              onClick={() => props.setIsOpen(false)}
              className="btn-close"
            >
              <VscChromeClose className="icon" />
            </button>
            <div className="items">
              <div className="itemModal">
                <label htmlFor="nome">Nome</label>
                <input
                  onChange={(e) => {
                    setNome(e.target.value);
                  }}
                  type="text"
                  id="nome"
                  required
                />
              </div>
              <div className="itemModalImg">
                <label htmlFor="arquivo">
                  <BsCardImage className="icon" />
                  Imagem
                </label>
                <input
                  onChange={(e) => {
                    setImg(e.target.files[0]);
                  }}
                  type="file"
                  id="arquivo"
                  required
                />
              </div>
              <div className="itemModal">
                <label htmlFor="valorAntigo">Valor Antigo</label>
                <input
                  onChange={(e) => {
                    setValor(e.target.value);
                  }}
                  type="text"
                  id="valorAntigo"
                  required
                />
              </div>
              <div className="itemModal">
                <label htmlFor="valorNovo">Valor Novo</label>
                <input
                  type="text"
                  onChange={(e) => {
                    setNovoValor(e.target.value);
                  }}
                  id="valorNovo"
                  required
                />
              </div>
              <div className="itemModal">
                <button
                  onClick={() => {
                    addTenis();
                  }}
                >
                  Cadastrar
                </button>
              </div>
              {message &&
                (message === "Tenis Cadastrado com sucesso!" ? (
                  <div className="check-shoes">
                    <BsCheckCircle className="icon-check" />
                    <small>{message}</small>
                  </div>
                ) : (
                  <div className="check-shoes check-shoes-failed">
                    <BiErrorAlt className="icon-check" />
                    <small>{message}</small>
                  </div>
                ))}
            </div>
          </div>
        </CadastroModal>
      ) : null}
    </>
  );
}
