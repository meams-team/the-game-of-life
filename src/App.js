import React from "react";
import { connect } from "react-redux";
import "./App.css";

// containers
import Grid from "./container/Grid";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Grid />
      </div>
    );
  }
}

export default App;
