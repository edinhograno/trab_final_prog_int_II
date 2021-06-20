import React, { useState } from "react";
import {
  ContainerHeader,
  ContentHeader,
  Logo,
  BtnContentHeader,
  Scene,
} from "./style/Header.js";
import Lottie from "react-lottie";
import animationData from "../animation.json";
import animationArrow from "../animationArrow.json";
import logo from "../img/logo.png";
import onda from "../img/onda.png";

export default function Header() {
  const [animation, setAnimation] = useState({
    isStopped: false,
    isPaused: false,
  });
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const arrowOptions = {
    loop: true,
    autoplay: true,
    animationData: animationArrow,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <ContainerHeader>
      <ContentHeader>
        <Logo>
          <img className="logo" src={logo} alt="" />
        </Logo>
        <BtnContentHeader></BtnContentHeader>
      </ContentHeader>
      <div className="containerAnimationRocket">
        <Lottie
          options={defaultOptions}
          height={400}
          width={"100%"}
          isStopped={animation.isStopped}
          isPaused={animation.isPaused}
        />
      </div>
      <div className="containerAnimationArrow">
        <Lottie
          options={arrowOptions}
          height={"100%"}
          width={"100%"}
          isStopped={animation.isStopped}
          isPaused={animation.isPaused}
        />
      </div>
      <img className="onda" src={onda} alt="" />
    </ContainerHeader>
  );
}
