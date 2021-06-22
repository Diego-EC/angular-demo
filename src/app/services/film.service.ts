import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  constructor() { }

  getFilms() {
    return ['lol', 'foo', 'pep', 'cocreta'];
  }
}
