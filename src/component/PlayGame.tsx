import React, { useEffect } from "react";
import "./PlayGame.scss";
import { useState } from "react";
import PlayGameImages from "./PlayGameImages";
import { handSignals } from "../constant/constant";
import SelectedHandleSignalImg from "./SelectedHandleSignalImg";
import { FaRegHandRock } from "react-icons/fa";
import { FaRegHandPeace } from "react-icons/fa";
import { FaRegHandPaper } from "react-icons/fa";
import QuitAndReturnButtons from "./QuitAndReturnButtons";

const PlayGame = () => {
  const [randomHandSignal, setRandomHandSignal] = useState("");
  const [selectedHandSignal, setSelectedHandSignal] = useState("");
  const [result, setResult] = useState("");

  useEffect(() => {
    const targetElem = document.querySelector(".result-text");
    if (targetElem) {
      targetElem?.classList.add(result);
    }
  }, [result]);
  const setHandSignal = (
    e: React.MouseEvent<HTMLButtonElement>,
    param: string
  ) => {
    setSelectedHandSignal(param);
    const randomHandSignal = getRandomInt(3);
    switch (param) {
      //if selected handSignal is Rock
      case handSignals[0].name:
        if (randomHandSignal === handSignals[0]) {
          setResult("draw");
        } else if (randomHandSignal === handSignals[1]) {
          setResult("lose");
        } else {
          setResult("win");
        }
        break;
      //if selected handSignal is Paper
      case handSignals[1].name:
        if (randomHandSignal === handSignals[0]) {
          setResult("win");
        } else if (randomHandSignal === handSignals[1]) {
          setResult("draw");
        } else {
          setResult("lose");
        }
        break;
      //if selected handSignal is Scissors
      case handSignals[2].name:
        if (randomHandSignal === handSignals[0]) {
          setResult("lose");
        } else if (randomHandSignal === handSignals[1]) {
          setResult("win");
        } else {
          setResult("draw");
        }
        break;
    }
  };

  const getRandomInt = (max: number) => {
    const num = Math.floor(Math.random() * max);
    setRandomHandSignal(handSignals[num].name);
    return handSignals[num];
  };

  const resetData = () => {
    setRandomHandSignal("");
    setSelectedHandSignal("");
    setResult("");
  };

  return (
    <div className="play-game-page">
      <h1 className="page-title">Rock Paper Scissors</h1>
      {result && <div className="result-text">{result.toUpperCase()}!</div>}
      <h4 className="player-name">OPPONENT</h4>
      <PlayGameImages
        selectedHandSignal={selectedHandSignal}
        randomHandSignal={randomHandSignal}
      />
      <hr />
      <h4 className="player-name you">YOU</h4>
      {!selectedHandSignal && (
        <div className="choose-button-wrapper">
          <button
            className="choose-button rock"
            onClick={(e) => setHandSignal(e, handSignals[0].name)}>
            {handSignals[0].name}
            <FaRegHandRock size="1.1em" />
          </button>
          <button
            className="choose-button paper"
            onClick={(e) => setHandSignal(e, handSignals[1].name)}>
            {handSignals[1].name}
            <FaRegHandPeace size="1.1em" />
          </button>
          <button
            className="choose-button scissors"
            onClick={(e) => setHandSignal(e, handSignals[2].name)}>
            {handSignals[2].name}
            <FaRegHandPaper size="1.1em" />
          </button>
        </div>
      )}
      {selectedHandSignal && result && (
        <SelectedHandleSignalImg selectedHandSignal={selectedHandSignal} />
      )}
      <QuitAndReturnButtons
        showButton={result ? true : false}
        resetData={resetData}
      />
    </div>
  );
};

export default PlayGame;
