import React, { useState } from "react";
import GameContainer from "./gameContainer";
import "./style.scss";
import UserDetails from "./users";

function Canvas() {
  const users_data = JSON.parse(localStorage.getItem("users"));
  const [color, setColor] = useState({
    color: "orange",
    p: 1,
  });
  const [users, setUsers] = useState(
    users_data
      ? users_data
      : {
          person1: "",
          person2: "",
        }
  );
  const [show, setShow] = useState(users_data ? true : false);

  if (show) {
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

  return <UserDetails setUsers={setUsers} users={users} setShow={setShow} />;
}

export default Canvas;
