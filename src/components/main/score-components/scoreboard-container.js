import React, { useState, useEffect } from "react";

const ScoreContainer = (props) => {
    return (
      <div className="scoreboard-container">
        <div className="scoreboard" id="current-scoreboard">
          <p>Current Score: {props.currentScore}</p>
        </div>
        <div className="scoreboard" id="high-scoreboard">
          <p>High Score:{props.highScore}</p>
        </div>
      </div>
    )
}

export default ScoreContainer;