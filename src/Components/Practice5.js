import React from "react";

//Example: Hide and show & toogle
class Practice5 extends React.Component {
  constructor() {
    super();
    this.state = {
      show: true,
      btnToogle: true,
    };
  }
  render() {
    return (
      <div>
        {this.state.show ? <h1>Hide and show</h1> : null}
        <button
          onClick={() => {
            this.setState({ show: false });
          }}
        >
          Click for hide and show!
        </button>

        {this.state.btnToogle ? <button>Hide and show</button> : null}
        <button
          onClick={() => {
            this.setState({ btnToogle: !this.state.btnToogle });
          }}
        >
          Toogle button
        </button>
      </div>
    );
  }
}
export default Practice5;
