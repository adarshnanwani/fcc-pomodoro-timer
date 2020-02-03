import React from "react";
import Pomodoro from "./Pomodoro";

const Main = () => {
  return (
    <section className="main grid">
      <Pomodoro />
      <p className="message">
        Built with <span style={{ color: "red" }}>&#10084;</span> by Ady
      </p>
    </section>
  );
};

export default Main;
