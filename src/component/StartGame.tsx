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
      <h1 className="page-title">Rock Paper Scissors</h1>
      <div className="title-img-wrapper">
        <IconContext.Provider
          value={{
            size: "100px",
          }}>
          <FaRegHandRock role="start-page-icon" className="icon-rock" />
          <FaRegHandPaper role="start-page-icon" className="icon-paper" />
          <FaRegHandPeace role="start-page-icon" className="icon-scissors" />
        </IconContext.Provider>
      </div>
      <div className="start-button-wrapper">
        <GlobalButton text="START" link="/playGame" />
      </div>
    </div>
  );
};

export default StartGame;
