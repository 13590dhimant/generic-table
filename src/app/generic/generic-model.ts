export class GenericActionModel {
  action: ActionTypes;
  caption: string;
  func: Function;

  constructor(action: ActionTypes, caption: string, func: Function) {
    this.action = action;
    this.caption = caption;
    this.func = func;
  }
}

export interface IGenericModel {

}

export interface IGenericActionResult {
  action: GenericActionModel;
  item: IGenericModel;
}

export enum ActionTypes {
  Create,
  Edit,
  Delete,
  View
}
