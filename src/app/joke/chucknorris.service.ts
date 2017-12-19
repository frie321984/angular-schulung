import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ChucknorrisService {

  constructor(private httpClient: HttpClient) { }

  getJoke(): Observable<Joke> {
    return this.httpClient.get<Joke>('https://api.chucknorris.io/jokes/random?category=dev');
  }

}

export interface Joke {
  category: string[];
  icon_url: string;
  id: string;
  url: string;
  value: string;
}
