import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenericComponent } from './generic.component';



@NgModule({
    declarations: [
        GenericComponent
    ],
    exports: [
        GenericComponent
    ],
    imports: [
        CommonModule
    ]
})
export class GenericModule { }
