import React from "react";

function Button({ handleClick }) {
  console.log("Button component rendered");

  return (
    <button onClick={handleClick}>
      Click Me
    </button>
  );
}

export default React.memo(Button);