import React from "react";
import { connect } from "react-redux";

// types
import { Dispatch } from "redux";
import { ICommonState, IGridProp } from "../entities/interfaces";

// Actions
import { generateGridData, play } from "../actions/grid";

// Components
import { Box } from "../components";

class Grid extends React.Component<IGridProp> {
  componentDidMount = () => {
    this.props.generateGridData(50, 50);

    setInterval(() => {
      this.props.onStartPlay(this.props.gridData);
    }, 1000);
  };

  // render
  drawGrid = () => {
    const { gridData } = this.props;

    if (!gridData.length) return null;
    let elements: any = [];
    for (let i = 0; i < gridData.length; i++) {
      for (let j = 0; j < gridData.length; j++) {
        let value = gridData[i][j];
        elements.push(<Box value={value} key={`${i}_${j}`} />);
      }
    }
    return elements;
  };

  render() {
    // console.log(this.props);
    return <div className="grid">{this.drawGrid()}</div>;
  }
}

const mapStateToProps = (state: ICommonState) => {
  console.log("mapStateToProps", state);
  return {
    gridData: state.grid.gridData
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    generateGridData: (row: number, col: number) =>
      dispatch(generateGridData(row, col)),
    onStartPlay: (arr: number[][]) => dispatch(play(arr))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Grid);
