import React, { Component } from "react";

// Example: #20 Listing with map function

export default class Practice15 extends Component {
  constructor() {
    super();
    this.state = {
      list: [
        { name: "Anand", phone: "1234", email: "abc@gmail.com" },
        { name: "Parmar", phone: "2344", email: "parmar@gmail.com" },
        { name: "Sameer", phone: "00001", email: "sameer@gmail.com" },
      ],
    };
  }
  render() {
    return (
      <div>
        <h1>Listing with map</h1>
        {this.state.list.map((item) => (
          <div>
            <span>
              Name: {item.name} Email: {item.email} Phone: {item.phone}
            </span>
          </div>
        ))}
      </div>
    );
  }
}
