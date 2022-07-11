import React, { useState } from "react";
import GameContainer from "./gameContainer";
import "./style.scss";
import UserDetails from "./users";

function Canvas() {
  const users_data = JSON.parse(localStorage.getItem("users"));
  const [users, setUsers] = useState(
    users_data
      ? users_data
      : {
          person1: "",
          person2: "",
        }
  );
  const [show, setShow] = useState(users_data ? true : false);

  return (
    <>
      {show ? (
        <>
          <div className="gameContainer">
            <div className="user">
              <h1 className="text-7xl">{users.person1}</h1>
            </div>
            <GameContainer users={users} />
            <div className="user">
              <h1 className="text-7xl">{users.person2}</h1>
            </div>
          </div>
        </>
      ) : (
        <UserDetails setUsers={setUsers} users={users} setShow={setShow} />
      )}
    </>
  );
}

export default Canvas;
