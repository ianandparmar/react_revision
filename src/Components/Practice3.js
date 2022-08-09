import React from "react";

//Example- Props with Functional component

// function Practice3(props){
//        return(
//               <div>
//                      <h1>{props.text} </h1>
//                      <h2>{props.obj1.name}</h2>
//               </div>
//        )
// }

//Example- Props with class component

class Practice3 extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.text}</h1>
        {/* <h2>{this.props.obj1.name}</h2> */}
      </div>
    );
  }
}

export default Practice3;
