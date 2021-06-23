import { Component, OnInit } from '@angular/core';
import { FilmService } from 'src/app/services/film.service';

@Component({
  selector: 'app-foo',
  templateUrl: './foo.component.html',
  styleUrls: ['./foo.component.scss']
})
export class FooComponent implements OnInit {

  name: string = "Diego";

  films: string[] = [];

  constructor(filmService: FilmService) {
    this.films = filmService.getFilms();
   }

  ngOnInit(): void {
  }

}
