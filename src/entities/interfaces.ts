export interface ICommonState {
  gameOfLife: IGridProp;
}

export interface IGridProp {
  gridData: number[][];
  generateGridData: (arg0: number, arg1: number) => {};
  onStartPlay: (arg0: number[][]) => {};
  startPlay: (
    rowCount: number,
    columnCount: number,
    timeInterval: number
  ) => {};
  rowCount: number;
  columnCount: number;
  timeInterval: number;
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
