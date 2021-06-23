import { Injectable } from '@angular/core';
import { Student } from 'src/app/models/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  students: Student[] = [];

  constructor() {}
  
  getStudents() {
    this.students = [new Student("Diego", "Ezquerro", 23), new Student("Foo", "Cocreta", 43)];
    return this.students;
  }
}
