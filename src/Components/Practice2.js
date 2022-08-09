import React from "react";

// Example- Functional Component

function Practice2(props) {
  const red = () => {
    alert("Function component u called");
  };
  return (
    <div>
      <h1 onClick={red}>{props.text}</h1>
    </div>
  );
}

export default Practice2;
