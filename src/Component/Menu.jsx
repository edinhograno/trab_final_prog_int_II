import React from "react";
import {
  ContentHeader,
  Logo,
  BtnContentHeader,
  ContainerUser,
} from "../Component/style/Menu";
import { Link } from "react-router-dom";
import logo from "../img/logo.svg";

export default function Menu() {
  return (
    <ContentHeader className="w-1200">
      <Logo>
        <Link
          to="/initial"
          style={{
            textDecoration: "none",
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: "20",
          }}
        >
          <img className="logo" src={logo} alt="" />
        </Link>
      </Logo>

      <ContainerUser>
        <p className="welcome">Bem-Vindo,</p>
        <h1 className="name">Edinho</h1>
      </ContainerUser>

      {/* <BtnContentHeader>
        <Link
          to="/login"
          style={{
            textDecoration: "none",
            color: "#fff",
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Login
        </Link>
      </BtnContentHeader> */}
    </ContentHeader>
  );
}
