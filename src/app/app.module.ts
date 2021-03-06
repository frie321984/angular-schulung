import { RandomAllowedGuard } from './random-allowed.guard';
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
import { ContactListComponent } from './contact-list/contact-list.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AccessDeniedComponent } from './access-denied/access-denied.component';


const routes: Routes = [
  {
    path: '',
    component: TodolistComponent
  },
  {
    path: 'access-denied',
    component: AccessDeniedComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'about/:id',
    component: AboutComponent,
  },
  {
    path: 'contacts',
    canActivate: [RandomAllowedGuard],
    component: ContactListComponent
  }  ,
  {
    path: '**',
    component: NotfoundComponent
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
    NavigationComponent,
    ContactListComponent,
    NotfoundComponent,
    AccessDeniedComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [ChucknorrisService, RandomAllowedGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
