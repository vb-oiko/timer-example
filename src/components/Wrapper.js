import React from "react";
import Timer from "./Timer";

export default class Wrapper extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: true,
    };
  }

  render() {
    return (
      <>
        {this.state.visible ? <Timer initialValueSec={5} /> : null}
        <br />
        <span
          role="button"
          onClick={() => {
            this.setState({ visible: !this.state.visible });
          }}
        >
          Toggle
        </span>
      </>
    );
  }
}
