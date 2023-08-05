import {Component} from '@angular/core';
import {ActionTypes, GenericActionModel, IGenericActionResult, IGenericModel} from "../generic/generic-model";
import {TestModel} from "./test.model";
import {TestService} from "./test.service";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent {

  actions: GenericActionModel[] = [];
  data: TestModel[] = [];
  showGeneric: boolean = false;

  constructor(private _testService: TestService) {

    this.actions = [new GenericActionModel(ActionTypes.Edit, 'Edit', this.editData),
      new GenericActionModel(ActionTypes.View, 'View', this.viewData)];

    console.log('constructor : ' + this._testService.edit());

    setTimeout(() => this.showGeneric = true, 1000);

  }


  editData(model: IGenericModel) {
    debugger;
    console.log('editData : ' + this._testService.edit());
  }

  viewData(model: IGenericModel) {
    console.log('viewData : ' + this._testService.edit());
  }

  onActionClicked($event: IGenericActionResult) {
    // $event.action.func($event.item);

    //alternate way
    if ($event.action.action === ActionTypes.Edit) {
      this.editData($event.item);
    } else if($event.action.action === ActionTypes.View) {
      this.viewData($event.item);
    }
  }
}
