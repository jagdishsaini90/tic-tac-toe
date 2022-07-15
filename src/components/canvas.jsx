import React, { useState } from "react";
import GameContainer from "./gameContainer";
import "./style.scss";
import ProtectedRoute from "./ProtectedRoute";

function Canvas() {
  ProtectedRoute();
  const [color, setColor] = useState({
    color: "orange",
    p: 1,
  });

  const users = JSON.parse(localStorage.getItem("users"));
  return (
    <div className="gameContainer">
      <div className="user">
        <h1
          style={{ color: color.p === 1 && color.color }}
          className="text-7xl"
        >
          {users.person1}
        </h1>
        <h1
          style={{ color: color.p === 2 && color.color }}
          className="text-7xl"
        >
          {users.person2}
        </h1>
      </div>
      <GameContainer setColor={setColor} users={users} />
      <div className="user hideMobileUser">
        <h1
          style={{ color: color.p === 2 && color.color }}
          className="text-7xl"
        >
          {users.person2}
        </h1>
      </div>
    </div>
  );
}

export default Canvas;
