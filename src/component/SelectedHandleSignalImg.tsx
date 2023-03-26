import React from "react";
import "./SelectedHandleSignalImg.scss";
import { IconContext } from "react-icons";
import { FaRegHandRock } from "react-icons/fa";
import { FaRegHandPeace } from "react-icons/fa";
import { FaRegHandPaper } from "react-icons/fa";
import { handSignals } from "../constant/constant";

const SelectedHandleSignImg: React.FC<{ selectedHandSignal: string }> = (
  props
) => {
  return (
    <div className="selected-handle-signal-img-wrapper">
      <IconContext.Provider
        value={{
          size: "130px",
        }}>
        {props.selectedHandSignal === handSignals[0].name && (
          <FaRegHandRock className="icon-rock" />
        )}
        {props.selectedHandSignal === handSignals[1].name && (
          <FaRegHandPaper className="icon-paper" />
        )}
        {props.selectedHandSignal === handSignals[2].name && (
          <FaRegHandPeace className="icon-scissors" />
        )}
      </IconContext.Provider>
    </div>
  );
};

export default SelectedHandleSignImg;
