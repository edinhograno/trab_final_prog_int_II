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
import Menu from "../Component/Menu";
import Axios from "axios";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

export default function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPass, setIsPass] = useState(true);

  const verificaDados = () => {
    Axios.post("http://localhost:3001/user", {
      email: email,
      password: password,
    })
      .then((response) => {
        if (response.data.message) {
          window.alert("Usuário ou senha inválidos");
        } else {
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
      <Menu />
      <LoginInfo>
        <h1>Login</h1>
        <LoginDados className="w-80">
          <div className="email">
            <input
              type="text"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <label htmlFor="">Email</label>
          </div>
          <div className="password">
            <input
              type={isPass ? "password" : "text"}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
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
        </LoginDados>
        <LoginButtons className="w-80">
          <BtnLogin>
            <button className="btn-social" onClick={verificaDados}>
              Logar
            </button>
          </BtnLogin>
          <LoginSocial>
            <button className="btn-social">Facebook</button>
            <button className="btn-social">Google</button>
          </LoginSocial>
        </LoginButtons>

        <NewAccountLogin className="w-80">
          <Link className="btn-account" to="/cadastro">
            Criar uma conta
          </Link>
        </NewAccountLogin>
      </LoginInfo>
    </LoginPage>
  );
}
