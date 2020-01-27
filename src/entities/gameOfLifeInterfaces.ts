export interface ICommonState {
  gameOfLife: IGameOfLifeProp;
}

export interface IGameOfLifeProp {
  gridData: number[][];
  rowCount: number;
  columnCount: number;
  timeInterval: number;
  title: string;
  generateGridData: (arg0: number, arg1: number) => {};
  startPlay: (rowCount: number, columnCount: number, timeInterval: number) => {};
}

export interface IGridInitState {
  gridData: number[][];
}

export interface IBoxProp {
  value: number;
}

export interface IAction {
  type: string;
  payload?: any;
}
