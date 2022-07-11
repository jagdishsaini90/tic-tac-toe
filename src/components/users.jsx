import React from "react";
import "./users.scss";

export default function UserDetails({ setShow, users, setUsers }) {
  return (
    <>
      <div className="usersCont max-w-xs">
        <div className="bg-white userForm shadow-md px-8 pt-6 pb-8">
          <div className="mb-20">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="player1"
            >
              Player One
            </label>
            <input
              value={users.person1}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="John Smith"
              onChange={(e) =>
                setUsers((prev) => {
                  return { ...prev, person1: e.target.value };
                })
              }
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="player2"
            >
              Player Two
            </label>
            <input
              value={users.person2}
              className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Smith John"
              onChange={(e) =>
                setUsers((prev) => {
                  return { ...prev, person2: e.target.value };
                })
              }
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-purple hover:bg-metal text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              disabled={users.person1 && users.person2 ? false : true}
              onClick={() => {
                localStorage.setItem("users", JSON.stringify(users));
                setShow(true);
              }}
            >
              Let's Go
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
