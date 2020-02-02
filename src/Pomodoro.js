import React, { Component } from "react";

class Pomodoro extends Component {
  state = {};
  render() {
    return (
      <section className="pomodoro">
        <h2>Pomodoro Clock</h2>
        <section className="settings">
          <section>
            <div id="break-length">Break Length</div>
            <section className="actions">
              <button className="button-action" id="break-decrement">
                <span className="btn">&#8722;</span>
              </button>
              <span className="count">5</span>
              <button className="button-action" id="break-increment">
                <span className="btn">&#43;</span>
              </button>
            </section>
          </section>
          <section>
            <div id="session-length">Session Length</div>
            <section className="actions">
              <button className="button-action" id="length-decrement">
                <span className="btn">&#8722;</span>
              </button>
              <span className="count">25</span>
              <button className="button-action" id="length-increment">
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
          <button className="button-action" id="start_stop">
            <span>&#9654;</span>
            {/* <span>&#9208;</span> */}
          </button>
          <button className="button-action" id="reset">
            <span>&#8635;</span>
          </button>
        </section>
      </section>
    );
  }
}

export default Pomodoro;
