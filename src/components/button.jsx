import React from "react";

function Button({ handleChange, one, name }) {
  return (
    <>
      <button
        type="button"
        name={name}
        disabled={one ? true : false}
        onClick={(e) => handleChange(e)}
        className="tictacButton text-9xl"
      >
        {one}
      </button>
    </>
  );
}

export default Button;
