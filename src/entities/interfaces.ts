export interface ICommonState {
  grid: IGridProp;
}

export interface IGridProp {
  gridData: [];
  generateGridData: (arg0: number, arg1: number) => {};
  onStartPlay: (arg0: number[][]) => {};
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
