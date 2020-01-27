import React from "react";

// containers
import { GameOfLife } from "./container";

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <GameOfLife
          title={"The Game of Life"}
          rowCount={process.env.REACT_APP_ROW}
          columnCount={process.env.REACT_APP_COLUMN}
          timeInterval={process.env.REACT_APP_TIME_INTERVAL_MS}
        />
      </div>
    );
  }
}

export default App;
