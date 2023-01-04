import React from "react";

// function Timer({ name, initialValueSec }) {
//   let timeLeft = initialValueSec;

//   setInterval(() => {
//     timeLeft -= 1;
//   }, 1000);

//   return (
//     <>
//       <h3>{name}</h3>
//       <div>Initial value: {initialValueSec}</div>
//       <div>Time left: {timeLeft}</div>
//     </>
//   );
// }

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.intervalId = null;

    this.plus = this.plus.bind(this);

    this.state = {
      timeLeft: props.initialValueSec,
      a: [],
      b: {
        c: "test",
      },
    };
  }

  plus() {
    this.setState({ timeLeft: this.state.timeLeft + 1 });
  }

  minus = () => {
    this.setState({ timeLeft: this.state.timeLeft - 1 });
  };

  // https://stackoverflow.com/questions/61254372/my-react-component-is-rendering-twice-because-of-strict-mode/61897567#61897567
  // https://reactjs.org/docs/strict-mode.html#detecting-unexpected-side-effects

  componentDidMount() {
    if (!this.intervalId) {
      this.intervalId = setInterval(() => {
        if (this.state.timeLeft === 0) {
          clearInterval(this.intervalId);
          return;
        }
        this.setState({ timeLeft: this.state.timeLeft - 1 });
      }, 1000);
    }
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
    this.intervalId = null;
  }

  render() {
    const { name, initialValueSec } = this.props;

    return (
      <>
        <h3>{this.props.name}</h3>
        <div>Initial value: {this.props.initialValueSec}</div>
        <span role="button" onClick={this.plus}>
          +
        </span>
        <div>Time left: {this.state.timeLeft}</div>
        <span
          role="button"
          onClick={() => {
            this.setState({ timeLeft: this.state.timeLeft - 1 });
          }}
        >
          -
        </span>
      </>
    );
  }
}

export default Timer;
