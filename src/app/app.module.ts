import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import {GenericModule} from "./generic/generic.module";
import {TestService} from "./test/test.service";

@NgModule({
  declarations: [
    AppComponent,
    TestComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        GenericModule
    ],
  providers: [TestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
