import { ChucknorrisService } from './chucknorris.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TodolistComponent } from './todolist/todolist.component';
import { AutoInputLengthDirective } from './auto-input-length.directive';
import { JokeComponent } from './joke/joke.component';
import { CrazycasePipe } from './todolist/crazycase.pipe';


@NgModule({
  declarations: [
    AppComponent,
    TodolistComponent,
    AutoInputLengthDirective,
    JokeComponent,
    CrazycasePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ChucknorrisService],
  bootstrap: [AppComponent]
})
export class AppModule { }
