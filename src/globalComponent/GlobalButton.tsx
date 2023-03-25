import React from "react";
import "./GlobalButton.scss";
import { Link } from "react-router-dom";

const GlobalButton: React.FC<{ text: string; link: string }> = (props) => {
  return (
    <div className="global-button-wrapper">
      <Link to={props.link}>
        <button>{props.text}</button>
      </Link>
    </div>
  );
};

export default GlobalButton;
