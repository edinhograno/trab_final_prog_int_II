import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  LoginPage,
  LoginInfo,
  LoginDados,
  BtnLogin,
  LoginSocial,
  NewAccountLogin,
  LoginButtons,
} from "../Component/style/Login";
import { BiErrorAlt } from "react-icons/bi";
import Axios from "axios";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

export default function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPass, setIsPass] = useState(true);
  const [failed, setFailed] = useState(false);
  const [message, setMessage] = useState("");

  const verificaDados = () => {
    Axios.post("http://localhost:3001/user", {
      email: email,
      password: password,
    })
      .then((response) => {
        if (response.data.message) {
          setFailed(true);
          setMessage(response.data.message);
        } else {
          setFailed(false);
          props.setIsLogged(true);
          props.setNome(response.data[0].username);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <LoginPage>
      <LoginInfo>
        <div className="titulo espacamento">
          <h1>Fazer login</h1>
          <small>Painel administrativo</small>
        </div>
        <LoginDados className="w-80 espacamento">
          <div className="email">
            <input
              type="text"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              name="loginemail"
            />
            <label htmlFor="">Email</label>
          </div>
          <div className="password">
            <input
              type={isPass ? "password" : "text"}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              name="loginpassword"
            />
            <button className="password-btn" onClick={() => setIsPass(!isPass)}>
              {isPass ? (
                <AiFillEyeInvisible className="eye-pass" />
              ) : (
                <AiFillEye className="eye-pass" />
              )}
            </button>

            <label htmlFor="">Password</label>
          </div>
          {failed ? (
            <div className="failed-message">
              <BiErrorAlt className="icon-failed" />
              <small className="login-error">{message}</small>
            </div>
          ) : null}
        </LoginDados>
        <LoginButtons className="w-80 espacamento">
          <BtnLogin>
            <button
              className="btn-social espacamento-button btn-login"
              onClick={verificaDados}
            >
              Logar
            </button>
          </BtnLogin>
          <LoginSocial>
            <button className="btn-social espacamento-button">Facebook</button>
            <button className="btn-social espacamento-button">Google</button>
          </LoginSocial>
        </LoginButtons>
        <NewAccountLogin className="w-80 espacamento">
          <Link
            onClick={() => props.setIsCreated(false)}
            className="btn-account"
            to="/cadastro"
          >
            Criar uma conta
          </Link>
        </NewAccountLogin>
      </LoginInfo>
    </LoginPage>
  );
}
