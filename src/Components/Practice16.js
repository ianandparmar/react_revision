import React from "react";
import "./Style.css";

// Example: #21 Apply Style

export default function Practice16(props) {
  const h2 = {
    color: "green",
    fontSize: "50px",
  };
  const h3 = {
    color: "blue",
    fontSize: "30px",
  };
  return (
    <div>
      <h1 className="header">React Global Style</h1>
      <h1 className={props.data === "apply" ? 'header' : "" }>React Condition Global Style </h1>
      <h2 style={props.data === "apply" ? h2 : h3}>React Inline Style</h2>
    </div>
  );
}
