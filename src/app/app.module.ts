import { GlobalErrorHandler } from './GlobalErrorHandler';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TodolistComponent } from './todolist/todolist.component';
import { AutoInputLengthDirective } from './auto-input-length.directive';


@NgModule({
  declarations: [
    AppComponent,
    TodolistComponent,
    AutoInputLengthDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandler
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
