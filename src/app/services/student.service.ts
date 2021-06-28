import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from 'src/app/models/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  students: Student[] = [];

  constructor(private httpClient: HttpClient) {}

  getStudents(){
    const path = `/students`;
    return this.httpClient.get<Student[]>(path);
  }
}
