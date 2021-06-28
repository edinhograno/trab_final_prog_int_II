import React from "react";
import Menu from "../Component/Menu";
import Login from "../Component/Login";

export default function LoginPage(props) {
  return (
    <>
      <Menu />
      <Login
        nome={props.nome}
        isLogged={props.isLogged}
        setNome={props.setNome}
        setIsLogged={props.setIsLogged}
        setIsCreated={props.setIsCreated}
      />
    </>
  );
}
