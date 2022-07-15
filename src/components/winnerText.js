import React from "react";
import { useParams } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import "./winnerText.scss";

const WinnerText = () => {
  const params = useParams();
  ProtectedRoute();
  return (
    <div className="winnerTextCont">
      <h1 className="winnerText" contentEditable spellCheck="false">
        Hurray! <span>{params.name}</span>
      </h1>
    </div>
  );
};

export default WinnerText;
