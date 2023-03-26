import React from "react";
import { IconContext } from "react-icons";
import { FaRegHandRock } from "react-icons/fa";
import { FaRegHandPeace } from "react-icons/fa";
import { FaRegHandPaper } from "react-icons/fa";
import "./PlayGameImages.scss";
import { handSignals } from "../constant/constant";

const PlayGameImages: React.FC<{
  selectedHandSignal: string;
  randomHandSignal: string;
}> = (props) => {
  return (
    <div
      className={
        props.randomHandSignal
          ? "selected play-game-img-wrapper"
          : "notSelected play-game-img-wrapper"
      }>
      <IconContext.Provider
        value={{
          size: "80px",
        }}>
        <FaRegHandRock
          className={
            props.randomHandSignal === handSignals[0].name
              ? "icon-rock active"
              : "icon-rock non-active"
          }
        />
        <FaRegHandPaper
          className={
            props.randomHandSignal === handSignals[1].name
              ? "icon-paper active"
              : "icon-paper non-active"
          }
        />
        <FaRegHandPeace
          className={
            props.randomHandSignal === handSignals[2].name
              ? "icon-scissors active"
              : "icon-scissors non-active"
          }
        />
      </IconContext.Provider>
    </div>
  );
};

export default PlayGameImages;
