//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [homescore, SetHomeScore] = useState(0);
  const [awayscore, SetAwayScore] = useState(0);
  const [t, set_t] = useState(60);

  function counter() {
    t = t - 1;
    if (t === 0) {
      t = 60;
      setTimeout(counter, 1);
    }


  }

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{homescore}</div>
          </div>
          <div className="timer" onLoad="counter()">{'00:' + t}</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{awayscore}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button onClick={() => SetHomeScore(homescore + 7)} className="homeButtons__touchdown">Home Touchdown</button>
          <button onClick={() => SetHomeScore(homescore + 3)} className="homeButtons__fieldGoal">Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button onClick={() => SetAwayScore(awayscore + 7)} className="awayButtons__touchdown">Away Touchdown</button>
          <button onClick={() => SetAwayScore(awayscore + 3)} className="awayButtons__fieldGoal">Away Field Goal</button>
        </div>
      </section>
    </div>
  );
}


export default App;