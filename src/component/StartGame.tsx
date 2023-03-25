import React from "react";
import GlobalButton from "../globalComponent/GlobalButton";
import "./StartGame.scss";
import { IconContext } from "react-icons";
import { FaRegHandRock } from "react-icons/fa";
import { FaRegHandPeace } from "react-icons/fa";
import { FaRegHandPaper } from "react-icons/fa";
const StartGame = () => {
  return (
    <div className="start-page">
      <h1 className="start-page-title">Rock Paper Scissors</h1>
      <div className="title-img-wrapper">
        <IconContext.Provider
          value={{
            color: "gray",
            size: "100px",
          }}>
          <FaRegHandRock className="icon-rock" />
          <FaRegHandPaper className="icon-paper" />
          <FaRegHandPeace className="icon-scissors" />
        </IconContext.Provider>
      </div>
      <div className="start-button-wrapper">
        <GlobalButton text="START" />
      </div>
    </div>
  );
};

export default StartGame;
