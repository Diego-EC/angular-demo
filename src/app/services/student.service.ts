import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from 'src/app/models/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private API_ROOT = "https://jsonplaceholder.typicode.com";
  students: Student[] = [];

  constructor(private httpClient: HttpClient) {}
  
  getStudents() {
    this.students = [new Student("Diego", "Ezquerro", 23), new Student("Luigi", "Bros", 43)];
    return this.students;
  }

  getAllStudents(){
    const path = `${this.API_ROOT}/users`;
    return this.httpClient.get<Student[]>(path);
  }

  getStudentsById(id: string){
    const path = `${this.API_ROOT}/users/${id}`;
    return this.httpClient.get<Student>(path);
  }
}
