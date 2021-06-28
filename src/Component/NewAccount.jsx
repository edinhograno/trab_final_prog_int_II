import React, { useState } from "react";
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

  const addUser = () => {
    if (password === confirmPassword) {
      Axios.post("http://localhost:3001/createUser", {
        username: name,
        userlastname: lastName,
        email: email,
        password: password,
        confirmpassword: confirmPassword,
      }).then(() => {
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
      });
      window.alert("Conta criada com sucesso!");
      props.setIsCreated(true);
    } else {
      window.alert("Senhas não conferem!");
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
          </div>
          <div className="container">
            <div className="container-dados">
              <div className="content">
                <input
                  required
                  type="text"
                  name="name"
                  id="name"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
                <label htmlFor="name">
                  Nome <span className="asterisco">*</span>
                </label>
              </div>
              <div className="content">
                <input
                  required
                  type="text"
                  name="lastname"
                  id="lastname"
                  onChange={(e) => {
                    setLastName(e.target.value);
                  }}
                />
                <label htmlFor="lastname">
                  Sobrenome <span className="asterisco">*</span>
                </label>
              </div>
            </div>
            <div className="container-dados">
              <div className="content">
                <input
                  required
                  type="text"
                  name="email"
                  id="email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                <label htmlFor="email">
                  E-mail <span className="asterisco">*</span>
                </label>
              </div>
              <p>Use oito ou mais caracteres</p>
            </div>
            <div className="container-dados">
              <div className="content">
                <input
                  minLength="8"
                  required
                  type={isPass ? "password" : "text"}
                  name="password"
                  id="password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
                <label htmlFor="password">
                  Senha <span className="asterisco">*</span>
                </label>
              </div>
              <div className="content">
                <input
                  minlength="8"
                  required
                  type={isPass ? "password" : "text"}
                  name="confirmpassword"
                  id="confirmpassword"
                  onChange={(e) => {
                    setConfirmPassword(e.target.value);
                  }}
                />
                <label htmlFor="confirmpassword">
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
                  Faça login em vez disso
                </Link>
              </div>
              <div className="content">
                <button className="btn-create-account" onClick={addUser}>
                  Criar Conta
                </button>
              </div>
            </div>
          </div>
        </div>
      </Account>
    </>
  );
}
