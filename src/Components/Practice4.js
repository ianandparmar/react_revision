import React from "react";

//Example- State in React

class Practice4 extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "Anand Parmar",
      email: "abc@gmail.com",
      count: 0,
    };
  }
  updateState() {
    this.setState({ name: "Sameer", email: "sam@gmail.com" });
  }
  updateCount() {
    this.setState({
      count: this.state.count + 1,
    });
  }
  render() {
    console.warn("As we update the state render is always call ");
    return (
      <div>
        <h1>Name: {this.state.name}</h1>
        <h1>Email: {this.state.email}</h1>
        <button
          onClick={() => {
            this.updateState();
          }}
        >
          Update the name & email
        </button>
        <h1>Count:{this.state.count}</h1>
        <button
          onClick={() => {
            this.updateCount();
          }}
        >
          Update count
        </button>
      </div>
    );
  }
}

export default Practice4;
