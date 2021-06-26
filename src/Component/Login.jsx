import React from "react";
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

export default function Login() {
  return (
    <LoginPage>
      <Menu />
      <LoginInfo>
        <h1>Login</h1>
        <LoginDados className="w-80">
          <div className="email">
            <input type="text" />
            <label htmlFor="">Email</label>
          </div>
          <div className="password">
            <input type="text" />
            <label htmlFor="">Password</label>
          </div>
        </LoginDados>
        <LoginButtons className="w-80">
          <BtnLogin>
            <button>Logar</button>
          </BtnLogin>
          <LoginSocial>
            <button>Facebook</button>
            <button>Google</button>
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
