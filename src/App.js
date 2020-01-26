import React from "react";
import "./App.css";

// containers
import GameOfLife from "./container/GameOfLife";

class App extends React.Component {
  render() {
    return (
      <div>
        <GameOfLife
          rowCount={process.env.REACT_APP_ROW}
          columnCount={process.env.REACT_APP_COLUMN}
          timeInterval={process.env.REACT_APP_TIME_INTERVAL_MS}
        />
      </div>
    );
  }
}

export default App;
