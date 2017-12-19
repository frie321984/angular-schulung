import { ChucknorrisService } from './joke/chucknorris.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TodolistComponent } from './todolist/todolist.component';
import { AutoInputLengthDirective } from './todolist/auto-input-length.directive';
import { JokeComponent } from './joke/joke.component';
import { CrazycasePipe } from './shared/listbox/crazycase.pipe';
import { ListboxComponent } from './shared/listbox/listbox.component';
import { AboutComponent } from './about/about.component';
import { NavigationComponent } from './navigation/navigation.component';


const routes: Routes = [
  {
    path: '',
    component: TodolistComponent
  },
  {
    path: 'about',
    component: AboutComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    TodolistComponent,
    AutoInputLengthDirective,
    JokeComponent,
    CrazycasePipe,
    ListboxComponent,
    AboutComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [ChucknorrisService],
  bootstrap: [AppComponent]
})
export class AppModule { }
