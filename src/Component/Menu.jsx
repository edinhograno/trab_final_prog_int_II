import React from "react";
import { ContentHeader, Logo, ContainerUser } from "../Component/style/Menu";
import logo from "../img/logo.svg";
import { BiLogOut } from "react-icons/bi";
import { Link } from "react-router-dom";

export default function Menu(props) {
  return (
    <ContentHeader className="w-1200">
      <Logo>
        <img className="logo" src={logo} alt="" />
      </Logo>
      {props.isName ? (
        <ContainerUser>
          <p className="welcome">Bem-Vindx,</p>
          <h1 className="name">{props.nome}</h1>
          <Link
            onClick={() => props.setIsLogged(false)}
            to="/"
            className="logout-icon"
          >
            <BiLogOut />
          </Link>
        </ContainerUser>
      ) : null}
    </ContentHeader>
  );
}
