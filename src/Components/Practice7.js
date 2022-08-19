import React from "react";

// Example life cycle method

class Practice7 extends React.Component {
  constructor() {
    super();
    console.warn("constructor");
  }

  componentDidMount() {
    console.warn("componentDidMount");
  }
  render() {
    console.warn("render");
    return (
      <div>
        <h1>Life cycle method</h1>
      </div>
    );
  }
}

export default Practice7;
