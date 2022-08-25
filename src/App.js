import React from "react";
import Practice1 from "./Components/Practice1";
import Practice2 from "./Components/Practice2";
import Practice3 from "./Components/Practice3";
import Practice4 from "./Components/Practice4";
import Practice5 from "./Components/Practice5";
import Practice6 from "./Components/Practice6";
import Practice7 from "./Components/Practice7";
import Practice8 from "./Components/Practice8";
import Practice9 from "./Components/Practice9";
import Practice10 from "./Components/Practice10";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      toggle: true,
    };
  }
  render() {
    return (
      <div>
        <header>
          {/* <Practice1 />
        <Practice2 text= "A functional component" />
        
        {
          React.createElement(
            'h1',
            null,
            'Hello, I am without jsx'
          )
        }

        <Practice3 text= "Hi Props"/>
        <Practice3 obj1= {{name: 'abcdef'}} /> 
        <Practice4 /> */}
          {/* <Practice5 /> */}
          {/* <Practice6 /> */}
          {/* <Practice7 /> */}
          {/* <Practice8 /> */}
          {/* <Practice9 /> */}

          {this.state.toggle ? <Practice10 /> : null}
          <button onClick={() => { this.setState({ toggle: !this.state.toggle });}} > Delete error </button>

          
        </header>
      </div>
    );
  }
}

export default App;
