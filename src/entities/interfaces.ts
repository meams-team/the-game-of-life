export interface ICommonState {
  gameOfLife: IGameOfLifeProp;
}

export interface IGameOfLifeProp {
  gridData: number[][];
  rowCount: number;
  columnCount: number;
  timeInterval: number;
  isStarted: boolean;
  generateGridData: (arg0: number, arg1: number) => {};
  startPlay: (gridData: number[][], rowCount: number, columnCount: number, timeInterval: number) => {};
}

export interface IGridInitState {
  gridData: [];
  isStarted: boolean
}

export interface IBoxProp {
  value: number;
}

export interface IAction {
  type: string;
  payload?: any;
}
