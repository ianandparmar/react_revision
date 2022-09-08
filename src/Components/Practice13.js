import React from "react";

// Submit Form

class Practice13 extends React.Component {
  constructor() {
    super();
    this.state = {
      user: null,
      password: null,
    };
  }
  submit() {
    console.log(this.state);
  }
  render() {
    return (
      <div>
        <h1>Form Handling</h1>
        <input
          type="text"
          name="user"
          onChange={(e) => {
            this.setState({ user: e.target.value });
          }}
        />
        <br />
        <br />
        <input
          type="password"
          name="password"
          onChange={(e) => {
            this.setState({ password: e.target.value });
          }}
        />
        <br />
        <br />
        <button
          type="submit"
          onClick={() => {
            this.submit();
          }}
        >
          Submit
        </button>
        <br />
        <br />
      </div>
    );
  }
}

export default Practice13;
