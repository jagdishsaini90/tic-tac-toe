import React, { useEffect, useState } from "react";
import Button from "./button";
import { CheckCombination } from "./helper";
import { Winner } from "./winner";
import WinnerText from "./winnerText";

const DefaultValues = {
  one: "",
  two: "",
  three: "",
  four: "",
  five: "",
  six: "",
  seven: "",
  eight: "",
  nine: "",
};

const GameContainer = ({ users }) => {
  const [values, setValues] = useState(DefaultValues);
  const [sign, setSign] = useState("O");
  const [winner, setWinner] = useState("");

  const handleChange = (e) => {
    const name = e.target.name;
    setValues((prev) => ({
      ...prev,
      [name]: sign,
    }));
    setSign((prev) => (prev === "O" ? "X" : "O"));
  };

  useEffect(() => {
    const val = CheckCombination(values);
    if (val) {
      setWinner(() => (val === 1 ? users.person1 : users.person2));
      return;
    }
  }, [values, users]);
  return (
    <div className="gameTop">
      <div className="container tictacContainer sm-auto">
        <div className="tictacRow">
          <Button handleChange={handleChange} name="one" one={values.one} />
          <Button handleChange={handleChange} name="two" one={values.two} />
          <Button handleChange={handleChange} name="three" one={values.three} />
        </div>
        <div className="tictacRow">
          <Button handleChange={handleChange} name="four" one={values.four} />
          <Button handleChange={handleChange} name="five" one={values.five} />
          <Button handleChange={handleChange} name="six" one={values.six} />
        </div>
        <div className="tictacRow">
          <Button handleChange={handleChange} name="seven" one={values.seven} />
          <Button handleChange={handleChange} name="eight" one={values.eight} />
          <Button handleChange={handleChange} name="nine" one={values.nine} />
        </div>
      </div>
      {winner && <Winner />}
      <div>{winner && <WinnerText user={winner} />}</div>
      {!winner ? (
        <div>
          <button
            onClick={() => {
              setValues(DefaultValues);
            }}
            className="glow-on-hover"
          >
            Reset
          </button>
          <button
            onClick={() => {
              localStorage.removeItem("users");
              window.location.reload();
            }}
            className="glow-on-hover"
          >
            Restart
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default GameContainer;
