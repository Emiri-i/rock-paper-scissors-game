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
import { ResultCountContext } from "../store/ResultCountContext";
import { useContext } from "react";

const PlayGame = () => {
  const countCtx = useContext(ResultCountContext);

  const [randomHandSignal, setRandomHandSignal] = useState("");
  const [selectedHandSignal, setSelectedHandSignal] = useState("");
  const [result, setResult] = useState("");

  const winText = "win";
  const drawText = "draw";
  const loseText = "lose";

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
          sendResult(drawText);
        } else if (randomHandSignal === handSignals[1]) {
          sendResult(loseText);
        } else {
          sendResult(winText);
        }
        break;
      //if selected handSignal is Paper
      case handSignals[1].name:
        if (randomHandSignal === handSignals[0]) {
          sendResult(winText);
        } else if (randomHandSignal === handSignals[1]) {
          sendResult(drawText);
        } else {
          sendResult(loseText);
        }
        break;
      //if selected handSignal is Scissors
      case handSignals[2].name:
        if (randomHandSignal === handSignals[0]) {
          sendResult(loseText);
        } else if (randomHandSignal === handSignals[1]) {
          sendResult(winText);
        } else {
          sendResult(drawText);
        }
        break;
    }
  };

  const sendResult = (resultText: string) => {
    setResult(resultText);
    if (resultText === winText) {
      countCtx.addWinCount();
    }
    if (resultText === drawText) {
      countCtx.addDrawCount();
    }
    if (resultText === loseText) {
      countCtx.addLoseCount();
    }
  };

  const getRandomInt = (max: number) => {
    const num = Math.floor(Math.random() * max);
    setRandomHandSignal(handSignals[num].name);
    return handSignals[num];
  };

  const resetData = () => {
    restart();
    countCtx.resetCount();
  };

  const restart = () => {
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
      <h4 className="player-name">YOU</h4>
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
            <FaRegHandPaper size="1.1em" />
          </button>
          <button
            className="choose-button scissors"
            onClick={(e) => setHandSignal(e, handSignals[2].name)}>
            {handSignals[2].name}
            <FaRegHandPeace size="1.1em" />
          </button>
        </div>
      )}
      {selectedHandSignal && result && (
        <>
          <SelectedHandleSignalImg selectedHandSignal={selectedHandSignal} />
          <div className="score">
            <div className="result">- result -</div>
            <div className="score-each">{`win : ${countCtx.winCount}`}</div>
            <div className="score-each">{`draw : ${countCtx.drawCount}`}</div>
            <div className="score-each">{`lose : ${countCtx.loseCount}`}</div>
          </div>
        </>
      )}
      <QuitAndReturnButtons
        showButton={result ? true : false}
        resetData={resetData}
        restart={restart}
      />
    </div>
  );
};

export default PlayGame;
