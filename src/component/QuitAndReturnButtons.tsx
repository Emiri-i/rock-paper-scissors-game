import React from "react";
import GlobalButton from "../globalComponent/GlobalButton";
import "./QuitAndReturnButtons.scss";
import { useEffect } from "react";

const QuitAndReturnButtons: React.FC<{
  showButton: boolean;
  restart: () => void;
  resetData: () => void;
}> = (props) => {
  useEffect(() => {
    if (props.showButton) {
      const targetElemList = document.querySelectorAll(".footer-btn");
      setTimeout(() => {
        targetElemList.forEach((elem) => {
          elem.classList.add("active");
        });
      }, 800);
    } else {
      const targetElemList = document.querySelectorAll(".footer-btn");
      targetElemList.forEach((elem) => {
        elem.classList.remove("active");
      });
    }
  }, [props.showButton]);

  return (
    <>
      {props.showButton && (
        <div className="footer-buttons">
          <GlobalButton
            text="Play Again"
            link="/playGame"
            className="footer-btn"
            cb={props.restart}
          />
          <GlobalButton
            text="Quit"
            link="/"
            className="footer-btn"
            cb={props.resetData}
          />
        </div>
      )}
    </>
  );
};

export default QuitAndReturnButtons;
