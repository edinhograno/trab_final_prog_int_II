import React from "react";
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
          <p>Criar uma conta</p>
          {/* transformar esse p em um LINK */}
        </NewAccountLogin>
      </LoginInfo>
      {/* <BtnVoltar>
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "#fff",
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <IoIosArrowDropleft className="icon" />
          Voltar
        </Link>
      </BtnVoltar> */}
    </LoginPage>
  );
}
