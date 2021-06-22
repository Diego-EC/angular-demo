import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor() {}

  getStudents() {
    return ['Pepe', 'Mario', 'Luigi', 'Diego'];
  }
}
