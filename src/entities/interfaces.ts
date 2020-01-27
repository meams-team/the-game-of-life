export interface ICommonState {
  gameOfLife: IGameOfLifeProp;
}

export interface IGameOfLifeProp {
  gridData: number[][];
  rowCount: number;
  columnCount: number;
  timeInterval: number;
  generateGridData: (arg0: number, arg1: number) => {};
  startPlay: (rowCount: number, columnCount: number, timeInterval: number) => {};
}

export interface IGridInitState {
  gridData: [];
}

export interface IBoxProp {
  value: number;
}

export interface IAction {
  type: string;
  payload?: any;
}
