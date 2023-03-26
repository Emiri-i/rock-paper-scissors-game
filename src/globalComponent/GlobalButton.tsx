import React from "react";
import "./GlobalButton.scss";
import { Link } from "react-router-dom";

const GlobalButton: React.FC<{
  text: string;
  link?: string;
  className?: string;
  cb?: () => void;
}> = (props) => {
  const callBack = () => {
    if (props.cb) {
      props.cb();
    }
  };
  return (
    <div className="global-button-wrapper">
      {props.link && (
        <Link to={props.link}>
          <button
            className={props.className ? props.className : ""}
            onClick={() => callBack()}>
            {props.text}
          </button>
        </Link>
      )}
      {!props.link && <button>{props.text}</button>}
    </div>
  );
};

export default GlobalButton;
