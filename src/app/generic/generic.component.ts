import {Component, EventEmitter, Input, Output} from '@angular/core';
import {GenericActionModel, IGenericActionResult, IGenericModel} from "./generic-model";

@Component({
  selector: 'app-generic',
  templateUrl: './generic.component.html',
  styleUrls: ['./generic.component.scss']
})
export class GenericComponent {

  @Input()
  actions: GenericActionModel[] = [];

  @Output()
  onAction: EventEmitter<IGenericActionResult> = new EventEmitter<IGenericActionResult>();

  selectedRowItem: IGenericModel = {id: '12345', name: 'abc'};

  onClick(ac: GenericActionModel) {
    this.onAction.emit({action: ac, item: this.selectedRowItem});
  }
}
