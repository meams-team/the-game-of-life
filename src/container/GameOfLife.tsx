import React from "react";
import { connect } from "react-redux";

// types
import { ICommonState, IGridProp } from "../entities/interfaces";
import { ThunkDispatch } from "redux-thunk";

// Actions
import { startPlay } from "../actions/grid";

// Components
import { Box } from "../components";

class GameOfLife extends React.Component<IGridProp> {
  componentDidMount = () => {
    const { rowCount, columnCount, timeInterval } = this.props;
    this.props.startPlay(rowCount, columnCount, timeInterval);
  };

  // render
  drawGrid = () => {
    const { gridData } = this.props;

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
    startPlay: (rowCount: number, columnCount: number, timeInterval: number) =>
      dispatch(startPlay(rowCount, columnCount, timeInterval))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GameOfLife);
