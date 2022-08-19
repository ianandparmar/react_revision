import React from "react";

// Example of componentDidMount

class Practice8 extends React.Component {
  constructor() {
    super();
    this.state = {
       data: null
    }
    console.warn("constructor");
  }

  componentDidMount() {
       this.setState ({data: "updated"});
    console.warn("componentDidMount");
  }
  render() {
    console.warn("render");
    return (
      <div>
        <h1>componentDidMount</h1>
      </div>
    );
  }
}

export default Practice8;
