import React from "react";

//Example- class Component

class Practice1 extends React.Component {
  constructor() {
    super();
  }
  componentDidMount() {
    console.warn("called life cycle method");
  }

  render() {
    return (
      <div>
        <h1>class Component</h1>
      </div>
    );
  }
}

export default Practice1;
