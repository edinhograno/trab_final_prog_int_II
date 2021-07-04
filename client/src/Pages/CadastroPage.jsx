import React from "react";
import NewAccount from "../Component/NewAccount";

export default function Cadastro(props) {
  return (
    <>
      <NewAccount setIsCreated={props.setIsCreated} />
    </>
  );
}
