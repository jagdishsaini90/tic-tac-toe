import React from "react";
import "./winnerText.scss";

const WinnerText = ({ user }) => {
  return (
    <div className="winnerTextCont">
      <h1 className="winnerText" contenteditable spellCheck="false">
        Hurray! <span>{user}</span>
      </h1>
    </div>
  );
};

export default WinnerText;
