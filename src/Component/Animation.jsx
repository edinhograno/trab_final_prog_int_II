import { ContainerAnimation } from "./style/Animation.js";
import Lottie from "react-lottie";
import animationData from "../animation.json";
import animationArrow from "../animationArrow.json";
import onda from "../img/onda.png";

export default function Animation() {
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
    <ContainerAnimation>
      <div className="containerAnimationRocket">
        <Lottie options={defaultOptions} height={400} width={"100%"} />
      </div>
      <div className="containerAnimationArrow">
        <Lottie options={arrowOptions} height={"100%"} width={"100%"} />
      </div>
      <img className="onda" src={onda} alt="" />
    </ContainerAnimation>
  );
}
