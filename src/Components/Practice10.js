import React from "react";

// Example: componentWillUnmount

class Practice10 extends React.Component {
  constructor() {
    super();
  }

  componentWillUnmount() {
    alert("user has been deleted.");
  }
  render() {
    return (
      <div>
        <h1>React:componentWillUnmount </h1>
        <ul>
          <li>Name: Anand</li>
          <li>Email: abc@gmail.com</li>
          <li>Contact me:000000000</li>
        </ul>
      </div>
    );
  }
}

export default Practice10;
