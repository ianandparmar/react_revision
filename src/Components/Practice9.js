import React from "react";

// Example of componentDidUpdate()
class Practice9 extends React.Component {
  constructor() {
    super();
    this.state = {
      active: null,
      who: null,
    };
  }
  componentDidUpdate() {
    console.log("componentDidUpdate");
    if (this.state.who == null) {
      this.setState({ who: "Anand Parmar" });
    }
  }
  render() {
    return (
      <div>
        <h1>React componentDidUpdate--{this.state.who}</h1>
        <button
          onClick={() => {
            this.setState({ active: "yes" });
          }}
        >
          Activate
        </button>
      </div>
    );
  }
}

export default Practice9;
