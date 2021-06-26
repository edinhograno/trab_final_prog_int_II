import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/logo.svg";
import { Account } from "./style/NewAccount";

export default function NewAccount() {
  return (
    <>
      <Account>
        <div className="master-container">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <div className="titulo">
            <h1>Crie sua Conta</h1>
          </div>
          <div className="container">
            <div className="container-dados">
              <div className="content">
                <input type="text" name="" id="" />
                <label>Nome</label>
              </div>
              <div className="content">
                <input type="text" name="" id="" />
                <label>Sobrenome</label>
              </div>
            </div>
            <div className="container-dados">
              <div className="content">
                <input type="text" name="" id="" />
                <label>E-mail</label>
              </div>
              <p>Use oito ou mais caracteres</p>
            </div>
            <div className="container-dados">
              <div className="content">
                <input type="text" name="" id="" />
                <label>Senha</label>
              </div>
              <div className="content">
                <input type="text" name="" id="" />
                <label>Confirmar</label>
              </div>
            </div>
            <div className="container-dados">
              <div className="content">
                <Link className="btn-login" to="/">
                  Faça login em vez disso
                </Link>
              </div>
              <div className="content">
                <button>Criar Conta</button>
              </div>
            </div>
          </div>
        </div>
      </Account>
    </>
  );
}
