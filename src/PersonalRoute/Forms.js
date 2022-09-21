import React, { Component } from "react";

export default class Forms extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
      password: null,
    };
  }
  submit(){
       console.log(this.state);
  }
  render() {
    return (
      <div>
        <h1>Forms Component</h1>
        <input type="text"/>
        <input type="password"/>

      </div>
    );
  }
}
