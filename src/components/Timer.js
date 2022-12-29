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

    this.plus = this.plus.bind(this);

    this.state = {
      timeLeft: props.initialValueSec,
      intervalId: null,
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

  // componentDidMount() {
  //   if (!this.state.intervalId) {
  //     const intervalId = setInterval(() => {
  //       console.warn(intervalId);
  //       if (this.state.timeLeft < 0) {
  //         clearInterval(this.state.intervalId);
  //       }
  //       this.setState({ timeLeft: this.state.timeLeft - 1 });
  //     }, 1000);

  //     this.setState({ intervalId });
  //   }
  //   // console.warn("Mounted");
  // }

  // componentWillUnmount() {
  //   clearInterval(this.state.intervalId);
  //   // console.warn("Will unmount");
  // }

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
        <span
          role="button"
          onClick={this.minus}
          onMouseEnter={() => {
            console.warn("Hover!!!");
          }}
        >
          -
        </span>
      </>
    );
  }
}

export default Timer;
