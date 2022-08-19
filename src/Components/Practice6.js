import React from "react";

// Event Handling using class Component

// class Practice6 extends React.Component {
//   constructor() {
//     super();
//   }

//   testFun(){
//     alert("test fun!");
//   }

//   render(){
//        return(
//               <div>
//                      <h1>Event handling in react</h1>
//                      <button onClick={this.testFun.bind()}>click me</button>
//               </div>
//        )
//   }
// }

// Event Handling using Functional Component

function Practice6() {
  // function testFun(){
  //   alert("test fun!");
  // }

  const testFun = () => {
    alert("test fun!");
  };

  return (
    <div>
      <h1>Event handling in react</h1>
      <button onClick={testFun}>Click me</button>
    </div>
  );
}

export default Practice6;
