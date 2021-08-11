import React, { Component } from "react";
import "./Timer.css";

export class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0,
    };
  }

  componentDidMount = () => {
    this.timerID = setInterval(() => {
      this.setState({
        time: this.state.time + 1,
      });
    }, 1000);
  };

  componentWillUnmount = () => {
    clearInterval(this.timerID);
  };

  clickHandler = () => {
    clearInterval(this.timerID);

    this.setState({
      time: 0,
    });

    this.timerID = setInterval(() => {
      this.setState({
        time: this.state.time + 1,
      });
    }, 1000);
  };

  render() {
    return (
      <div className="container">
        <div className="timer">{this.state.time}</div>
        <button onClick={this.clickHandler}>Reset Timer</button>
      </div>
    );
  }
}
