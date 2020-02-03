import React, { Component } from "react";

class Pomodoro extends Component {
  state = {
    breakLength: 5,
    sessionLength: 25,
    isTimerActive: false,
    isTimerPaused: false,
    totalSeconds: 25 * 60,
    showPlay: true,
    isBreak: false,
    isPlaying: false
  };

  timer;

  componentDidUpdate() {
    if(this.state.totalSeconds === 0){
      this.audio.currentTime = 0;
      this.audio.play();
    }
  }

  resetTimer = () => {
    this.setState({
      breakLength: 5,
      sessionLength: 25,
      isTimerActive: false,
      isTimerPaused: false,
      totalSeconds: 25 * 60,
      showPlay: true,
      isBreak: false,
      isPlaying: false
    });
    clearInterval(this.timer);
    this.audio.pause();
    this.audio.currentTime = 0;
  };

  toggleTimer = () => {
    if (!this.state.isTimerActive && !this.state.isTimerPaused) {
      // Start the timer
      this.timer = setInterval(this.countdown, 1000);
      this.setState({
        isTimerActive: true,
        showPlay: false
      });
    } else if (this.state.isTimerActive && !this.state.isTimerPaused) {
      // Pause the timer
      this.setState({
        isTimerPaused: true,
        showPlay: true
      });
    } else {
      // Unpause the timer
      if (typeof this.timer !== "undefined" && this.state.totalSeconds > 0) {
        this.setState({
          isTimerPaused: false,
          showPlay: false
        });
      }
    }
  };

  startTimer = () => {
    this.timer = setInterval(this.countdown, 1000);
  };

  countdown = () => {
    let seconds = this.state.totalSeconds - 1;
    if (!this.state.isTimerPaused) {
      this.setState({
        totalSeconds: seconds
      });
    }
    if (seconds < 0 && this.state.isBreak === false) {
      clearInterval(this.timer);
      this.setState({
        totalSeconds: this.state.breakLength * 60,
        isBreak: true
      });
      // this.timer = setInterval(this.countdown, 1000);
      this.startTimer();
    } else if (seconds < 0 && this.state.isBreak === true) {
      clearInterval(this.timer);
      this.setState({
        totalSeconds: this.state.sessionLength * 60,
        isBreak: false
      });
      this.startTimer();
      //this.timer = setInterval(this.countdown, 1000);
    }
  };

  updateSessionLength = num => {
    if (!this.state.isTimerActive) {
      this.setState(prevState => {
        let newSess = prevState.sessionLength + num;
        if (newSess <= 0) newSess = 1;
        if (newSess > 60) newSess = 60;
        return {
          sessionLength: newSess,
          totalSeconds: newSess * 60
        };
      });
    }
  };

  updateBreakLength = num => {
    if (!this.state.isTimerActive || this.state.isTimerPaused) {
      this.setState(prevState => {
        let newBreak = prevState.breakLength + num;
        if (newBreak <= 0) newBreak = 1;
        if (newBreak > 60) newBreak = 60;
        return {
          breakLength: newBreak
        };
      });
    }
  };

  render() {
    const totalSeconds = this.state.totalSeconds;
    let hours = Math.floor(totalSeconds / 60);
    if (hours < 10) hours = "0" + hours;
    let seconds = totalSeconds % 60;
    if (seconds < 10) seconds = "0" + seconds;
    return (
      <section className="pomodoro">
        <h2>Pomodoro Clock</h2>
        <section className="settings">
          <section>
            <div id="break-label">Break Length</div>
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
            <div id="session-label">Session Length</div>
            <section className="actions">
              <button
                className="button-action"
                id="session-decrement"
                onClick={() => this.updateSessionLength(-1)}
              >
                <span className="btn">&#8722;</span>
              </button>
              <span className="count" id="session-length">
                {this.state.sessionLength}
              </span>
              <button
                className="button-action"
                id="session-increment"
                onClick={() => this.updateSessionLength(1)}
              >
                <span className="btn">&#43;</span>
              </button>
            </section>
          </section>
        </section>
        <section className="session-details">
          <div id="timer-label">{this.state.isBreak ? "Break" : "Session"}</div>
          <section id="time-left">
            {hours}:{seconds}
          </section>
        </section>
        <section className="grid">
          <button
            className="button-action"
            id="start_stop"
            onClick={this.toggleTimer}
          >
            {this.state.showPlay ? <span>&#9654;</span> : <span>&#8214;</span>}
          </button>
          <button
            className="button-action"
            id="reset"
            onClick={this.resetTimer}
          >
            <span>&#8635;</span>
            <audio
              src="https://goo.gl/65cBl1"
              id="beep"
              preload="auto"
              ref={audio => (this.audio = audio)}
            />
          </button>
        </section>
      </section>
    );
  }
}

export default Pomodoro;
