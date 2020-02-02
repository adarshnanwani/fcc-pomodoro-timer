import React, { Component } from "react";

class Pomodoro extends Component {
  state = {
    breakLength: 5,
    sessionLength: 25,
    isTimerActive: false,
    isTimerPaused: false
  };

  resetTimer = () => {
    this.setState({
      breakLength: 5,
      sessionLength: 25,
      isTimerActive: false,
      isTimerPaused: false
    });
  };

  toggleTimer = () => {
    if (!this.state.isTimerActive && !this.state.isTimerPaused) {
      // Start the timer
      this.setState({
        isTimerActive: true
      });
    } else if (this.state.isTimerActive && !this.state.isTimerPaused) {
      // Pause the timer
      this.setState({
        isTimerPaused: true
      });
    } else {
      // Unpause the timer
      this.setState({
        isTimerPaused: false
      });
    }
  };

  updateSessionLength = num => {
    if (!this.state.isTimerActive) {
      this.setState(prevState => {
        let newSess = prevState.sessionLength + num;
        if (newSess <= 0) newSess = 1;
        return {
          sessionLength: newSess
        };
      });
    }
  };

  updateBreakLength = num => {
    if (!this.state.isTimerActive || this.state.isTimerPaused) {
      this.setState(prevState => {
        let newBreak = prevState.breakLength + num;
        if (newBreak <= 0) newBreak = 1;
        return {
          breakLength: newBreak
        };
      });
    }
  };

  render() {
    return (
      <section className="pomodoro">
        <h2>Pomodoro Clock</h2>
        <section className="settings">
          <section>
            <div id="break-length-container">Break Length</div>
            <section className="actions">
              <button
                className="button-action"
                id="break-decrement"
                onClick={() => this.updateBreakLength(-1)}
              >
                <span className="btn">&#8722;</span>
              </button>
              <span className="count" id="break-length">
                {this.state.breakLength}
              </span>
              <button
                className="button-action"
                id="break-increment"
                onClick={() => this.updateBreakLength(1)}
              >
                <span className="btn">&#43;</span>
              </button>
            </section>
          </section>
          <section>
            <div id="session-length-container">Session Length</div>
            <section className="actions">
              <button
                className="button-action"
                id="length-decrement"
                onClick={() => this.updateSessionLength(-1)}
              >
                <span className="btn">&#8722;</span>
              </button>
              <span className="count" id="session-length">
                {this.state.sessionLength}
              </span>
              <button
                className="button-action"
                id="length-increment"
                onClick={() => this.updateSessionLength(1)}
              >
                <span className="btn">&#43;</span>
              </button>
            </section>
          </section>
        </section>
        <section className="session-details">
          <div id="timer-label">Session</div>
          <section id="time-left">25:00</section>
        </section>
        <section className="grid">
          <button
            className="button-action"
            id="start_stop"
            onClick={this.toggleTimer}
          >
            {this.state.isTimerPaused ? (
              <span>&#8214;</span>
            ) : (
              <span>&#9654;</span>
            )}
          </button>
          <button
            className="button-action"
            id="reset"
            onClick={this.resetTimer}
          >
            <span>&#8635;</span>
          </button>
        </section>
      </section>
    );
  }
}

export default Pomodoro;
