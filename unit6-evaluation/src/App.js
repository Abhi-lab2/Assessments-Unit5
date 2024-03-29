// import logo from './logo.svg';
import { useState } from "react";
import "./App.css";

function App() {
  const [state, setstate] = useState({
    score: 1,
    wicket: 1,
    over: 2,
    ball: Math.round(0.1),
  });

  const handleChange1 = (num, val) => {
    if (state.score > 100 || state.wicket >= 12) {
      return;
    }
    state[num] = state[num] + val;

    setstate({
      score: state.score,
      wicket: state.wicket,
      over: state.over,
      ball: state.ball,
    });

    if (state.score >= 100) {
      console.log("India Won");
    }
  };

  return (
    <div className="App">
      <h3>India:</h3>
      <div className="banner">
        <div>
          Score:{" "}
          <h1 className="scoreCount">
            {
              // show "score" here
              state.score
            }
          </h1>
        </div>
        <div>
          Wicket:{" "}
          <h1 className="wicketCount">
            {
              // show wicket here
              state.wicket
            }
          </h1>
        </div>

        <div>
          Over:{" "}
          <h1 className="overCount">
            {
              // Show Over here in the format: "over.ball" eg: 4.5 means 4th over and 5th ball
              // if 1 more ball is thrown then over is now 5.0
              // you have to write logic to form this string from current ball number.

              state.ball
            }
          </h1>
        </div>
      </div>

      <div className="addScore">
        Add Score
        {/* these buttons should add the respective amount in the score */}
        <button className="addScore1" onClick={() => handleChange1("score", 1)}>
          Add 1
        </button>
        <button className="addScore4" onClick={() => handleChange1("score", 4)}>
          Add 4
        </button>
        <button className="addScore6" onClick={() => handleChange1("score", 6)}>
          Add 6
        </button>
      </div>

      <div className="addWicket" >
        Add Wicket
        {/* Increase the count of wicket */}
        <button onClick={() => handleChange1("wicket", 1)}>Add 1 wicket</button>
      </div>

      <div className="addBall">
        Add ball
        {/* Increase the total number of balls thrown here. */}
        <button onClick={() => handleChange1("ball", 1)}>Add 1</button>
      </div>

      {/* If score reaches greater than 100, show text "India Won" without quotes in h1 tag with class name 'status' */}
      <h1>{state.score > 100 ? "India Won" : ""}</h1>
    </div>
  );
}

export default App;
