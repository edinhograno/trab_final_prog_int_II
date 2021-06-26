import React, { useState } from "react";
import Axios from "axios";

export default function Cadastro() {
  const [nome, setNome] = useState("");
  const [img, setImg] = useState("");
  const [valor, setValor] = useState(0);
  const [novoValor, setNovoValor] = useState(0);

  const [tenis, setTenis] = useState([]);

  const addTenis = () => {
    Axios.post("http://localhost:3001/create", {
      nome: nome,
      img: img,
      valor: valor,
      novoValor: novoValor,
    }).then(() => {
      setTenis([
        ...tenis,
        {
          nome: nome,
          img: img,
          valor: valor,
          novoValor: novoValor,
        },
      ]);
    });
  };

  return (
    <div className="containerCadastro">
      <label>Nome</label>
      <input
        onChange={(e) => {
          setNome(e.target.value);
        }}
        type="text"
      />
      <label>Img</label>
      <input
        onChange={(e) => {
          setImg(e.target.value);
        }}
        type="text"
      />
      <label>Valor Antigo</label>
      <input
        onChange={(e) => {
          setValor(e.target.value);
        }}
        type="text"
      />
      <label>Valor Novo</label>
      <input
        type="text"
        onChange={(e) => {
          setNovoValor(e.target.value);
        }}
      />
      <button
        onClick={() => {
          addTenis();
        }}
      >
        Enviar
      </button>
    </div>
  );
}
