import { ChucknorrisService } from './chucknorris.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})
export class JokeComponent implements OnInit {
  joke = '';

  constructor(private chucknorrisService: ChucknorrisService) { }

  ngOnInit() {
    this.updateJoke();
  }

  async updateJoke() {
    this.chucknorrisService.getJoke().subscribe((response) => {
      this.joke = response.value;
    });

  }

}
