import React, { useState } from "react";
import { BiErrorAlt } from "react-icons/bi";
import { BsCheckCircle } from "react-icons/bs";
import { Link } from "react-router-dom";
import logo from "../img/logo.svg";
import { Account } from "./style/NewAccount";
import Axios from "axios";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

export default function NewAccount(props) {
  const [user, setUser] = useState([]);
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isPass, setIsPass] = useState(true);
  const [identificator, setIdentificator] = useState();
  const [message, setMessage] = useState("");

  const addUser = () => {
    if (name !== "" && lastName !== "" && email !== "") {
      if (
        password === confirmPassword &&
        password !== "" &&
        confirmPassword !== ""
      ) {
        Axios.post("http://localhost:3001/createUser", {
          username: name,
          userlastname: lastName,
          email: email,
          password: password,
          confirmpassword: confirmPassword,
        }).then((response) => {
          if (response.data.message) {
            setIdentificator(0);
            setMessage(response.data.message);
          } else {
            setUser([
              ...user,
              {
                username: name,
                userlastname: lastName,
                email: email,
                password: password,
                confirmpassword: confirmPassword,
              },
            ]);
            setIdentificator(1);
          }
        });
      } else {
        setIdentificator(2);
      }
    } else {
      setIdentificator(3);
    }
  };
  return (
    <>
      <Account>
        <div className="master-container">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <div className="titulo">
            <h1>Crie sua Conta</h1>
            {identificator === 0 ? (
              <div className="failed-message">
                <BiErrorAlt className="icon-failed" />
                <small className="account-error-message">{message}</small>
              </div>
            ) : identificator === 1 ? (
              <div className="success-message">
                <BsCheckCircle />
                <small>Conta criada com Sucesso!</small>
                <button
                  className="btn-success-message"
                  onClick={() => props.setIsCreated(true)}
                >
                  Fazer Login
                </button>
              </div>
            ) : identificator === 2 ? (
              <div className="failed-message">
                <BiErrorAlt className="icon-failed" />
                <small className="account-error-message">
                  As senhas não correspondem
                </small>
              </div>
            ) : identificator === 3 ? (
              <div className="failed-message">
                <BiErrorAlt className="icon-failed" />
                <small className="account-error-message">
                  Preencha todos os campos obrigatórios
                </small>
              </div>
            ) : null}
          </div>

          <form
            method="post"
            className="container"
            onSubmit={(e) => {
              e.preventDefault();
              addUser();
            }}
          >
            <div className="container-dados">
              <div className="content">
                <input
                  className="input-content
                "
                  type="text"
                  name="name"
                  id="name"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
                <label className="content-label" htmlFor="name">
                  Nome <span className="asterisco">*</span>
                </label>
              </div>
              <div className="content">
                <input
                  className="input-content
                "
                  type="text"
                  name="lastname"
                  id="lastname"
                  onChange={(e) => {
                    setLastName(e.target.value);
                  }}
                />
                <label className="content-label" htmlFor="lastname">
                  Sobrenome <span className="asterisco">*</span>
                </label>
              </div>
            </div>
            <div className="container-dados">
              <div className="content">
                <input
                  className="input-content
                "
                  type="text"
                  name="email"
                  id="email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                <label className="content-label" htmlFor="email">
                  E-mail <span className="asterisco">*</span>
                </label>
              </div>
            </div>
            <div className="container-dados">
              <div className="content">
                <input
                  className="input-content
                "
                  type={isPass ? "password" : "text"}
                  name="password"
                  id="password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
                <label className="content-label" htmlFor="password">
                  Senha <span className="asterisco">*</span>
                </label>
              </div>
              <div className="content">
                <input
                  className="input-content
                "
                  type={isPass ? "password" : "text"}
                  name="confirmpassword"
                  id="confirmpassword"
                  onChange={(e) => {
                    setConfirmPassword(e.target.value);
                  }}
                />
                <label className="content-label" htmlFor="confirmpassword">
                  Confirmar <span className="asterisco">*</span>
                </label>
              </div>

              {isPass ? (
                <button
                  className="password-btn"
                  onClick={() => setIsPass(!isPass)}
                >
                  <AiFillEyeInvisible className="eye-pass" />
                </button>
              ) : (
                <button
                  className="password-btn"
                  onClick={() => setIsPass(!isPass)}
                >
                  <AiFillEye className="eye-pass" />
                </button>
              )}
            </div>
            <div className="container-dados">
              <div className="content">
                <Link className="btn-login" to="/">
                  Faça login <span>em vez disso</span>
                </Link>
              </div>
              <div className="content">
                <input
                  type="submit"
                  className="btn-create-account"
                  value="Criar Conta"
                />
              </div>
            </div>
          </form>
        </div>
      </Account>
    </>
  );
}
