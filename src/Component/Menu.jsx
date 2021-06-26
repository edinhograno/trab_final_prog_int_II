import React from "react";
import { ContentHeader, Logo, ContainerUser } from "../Component/style/Menu";
import logo from "../img/logo.svg";

export default function Menu(props) {
  return (
    <ContentHeader className="w-1200">
      <Logo>
        <img className="logo" src={logo} alt="" />
      </Logo>
      {props.isName ? (
        <ContainerUser>
          <p className="welcome">Bem-Vindo,</p>
          <h1 className="name">Edinho</h1>
        </ContainerUser>
      ) : null}
    </ContentHeader>
  );
}
