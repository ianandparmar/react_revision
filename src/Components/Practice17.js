import React, { Component } from "react";

//Call API

export default class Practice17 extends Component {
  constructor() {
    super();

    this.state = {
      users: null,
    };
  }

  componentDidMount() {
    fetch("https://reqres.in/api/users").then((resp) => {
      resp.json().then((result) => {
        // console.log(result);
        console.table("--->", result.data);
        this.setState({ users: result.data });
      });
    });
  }
  render() {
    return (
      <div>
        <h1>Fetch API Data</h1>
        {this.state.users ? this.state.users.map((item, i) => (
              <div>
                <p>
                  {i} ----
                  {item.first_name} ----
                  {item.last_name} ----
                  {item.email} ----
                </p>
              </div>
            ))
          : null}
      </div>
    );
  }
}
