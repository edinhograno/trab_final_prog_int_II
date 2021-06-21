import React from "react";
import { ContentHeader, Logo, BtnContentHeader } from "../Component/style/Menu";
import { Link } from "react-router-dom";
import logo from "../img/logo.svg";

export default function Menu() {
  return (
    <ContentHeader className="w-1200">
      <Logo>
        <img className="logo" src={logo} alt="" />
      </Logo>

      <BtnContentHeader>
        <Link
          to="/login"
          style={{
            textDecoration: "none",
            color: "#fff",
          }}
        >
          Login
        </Link>
      </BtnContentHeader>
    </ContentHeader>
  );
}
