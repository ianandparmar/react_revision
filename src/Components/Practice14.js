import React from "react";

// Form validation

class Practice14 extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      password: "",
      nameError: "",
      passwordError: "",
    };
  }
  valid() {
    if (!this.state.name.includes("@") && this.state.password.length < 5) {
      this.setState({
        nameError: "invalid name",
        passwordError: "Password length should be more than 5",
      });
    } else if (!this.state.name.includes("@")) {
      this.setState({
        nameError: "invalid name",
      });
    } else if (this.state.password.length < 5) {
      this.setState({
        passwordError: "Password length should be more than 5",
      });
    } else {
      return true;
    }
  }
  submit() {
    this.setState({
      nameError: "",
      passwordError: "",
    });
    if (this.valid()) {
      alert("Form has been Submited!");
    }
  }
  render() {
    return (
      <div style={{"text-align": "center"}}>
        <h1>Form Validation</h1>
        <input
          type="text"
          onChange={(event) => {
            this.setState({ name: event.target.value });
          }}
        />
        <p style={{ color: "red", fontSize: "12px" }}>{this.state.nameError}</p>
        <input
          type="password"
          onChange={(event) => {
            this.setState({ password: event.target.value });
          }}
        />
        <p style={{ color: "red", fontSize: "12px" }}>
          {this.state.passwordError}
        </p>
        <button
          onClick={() => {
            this.submit();
          }}
        >
          Submit
        </button>
      </div>
    );
  }
}

export default Practice14;
