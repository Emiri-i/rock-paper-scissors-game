import React from "react";
import "./GlobalButton.scss";

const GlobalButton: React.FC<{ text: String }> = (props) => {
  return (
    <div className="global-button-wrapper">
      <button>{props.text}</button>
    </div>
  );
};

export default GlobalButton;
