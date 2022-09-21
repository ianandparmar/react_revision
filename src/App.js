import React from "react";
import Home from "./PersonalRoute/Home";
import About from "./PersonalRoute/About";
import Projects from "./PersonalRoute/Projects";
import Forms from "./PersonalRoute/Forms";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

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
import Practice11 from "./Components/Practice11";
import Practice12 from "./Components/Practice12";
import Practice13 from "./Components/Practice13";
import Practice14 from "./Components/Practice14";
import Practice15 from "./Components/Practice15";
import Practice16 from "./Components/Practice16";
import Practice17 from "./Components/Practice17";

class App extends React.Component {
  constructor() {
    super();
    // this.state = {
    //   toggle: true,
    // };
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

          {/* {this.state.toggle ? <Practice10 /> : null}
          <button
            onClick={() => {
              this.setState({ toggle: !this.state.toggle });
            }}
          >
            {" "}
            Delete error{" "}
          </button> */}

          {/* <Practice11 /> */}

          {/* <Practice12 /> */}

          {/* <Practice13 /> */}

          {/* <Practice14 /> */}

          {/* <Practice15 /> */}

          {/* <Practice16 data="apply"/>  */}

          {/* <Router>
            <Link to=""> Home </Link>
            <Link to="/about"> About </Link> 
            <Link to="/projects"> Projects </Link>
            <Link to="/forms"> Forms</Link>

            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/projects" component={Projects} />
            <Route path="/forms" component={Forms}/>


            <Home />
            <Projects />
            <About />

          </Router> */}

          <Practice17 />
          
        </header>
      </div>
    );
  }
}

export default App;
