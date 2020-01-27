import React from "react";
import { connect } from "react-redux";

// types
import { ICommonState, IGameOfLifeProp } from "../entities/interfaces";
import { ThunkDispatch } from "redux-thunk";

// Actions
import { generateGridData, startPlay } from "../actions/gameOfLifeActions";

// Components
import { Box } from "../components";

class GameOfLife extends React.Component<IGameOfLifeProp> {
  componentDidMount = () => {
    const { gridData, rowCount, columnCount, timeInterval } = this.props;
    const { generateGridData, startPlay } = this.props;
    // generateGridData(5, 5);
    // console.log("gridData", gridData);
    startPlay(gridData, rowCount, columnCount, timeInterval);

    // setInterval(() => {
    // }, 1000);
  };

  // render
  drawGrid = () => {
    const { gridData } = this.props;
    console.log("--props", gridData);
    if (!gridData.length) return null;

    let elements: React.ReactElement<any>[] = [];

    for (let i = 0; i < gridData.length; i++) {
      for (let j = 0; j < gridData.length; j++) {
        let value = gridData[i][j];
        elements.push(<Box value={value} key={`${i}_${j}`} />);
      }
    }

    return elements;
  };

  render() {
    return <div className="grid">{this.drawGrid()}</div>;
  }
}

const mapStateToProps = (state: ICommonState) => {
  return {
    gridData: state.gameOfLife.gridData
  };
};

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>) => {
  return {
    generateGridData: (row: number, col: number) => dispatch(generateGridData(5, 5)),
    startPlay: (gridData: number[][], rowCount: number, columnCount: number, timeInterval: number) => dispatch(startPlay(gridData, rowCount, columnCount, timeInterval))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GameOfLife);
