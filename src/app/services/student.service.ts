import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from 'src/app/models/student.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  students: Student[] = [];

  constructor(private httpClient: HttpClient) {}
  
  getStudents() {
    this.students = [new Student("Diego", "Ezquerro", 23), new Student("Luigi", "Bros", 43)];
    return this.students;
  }

  getAllStudents(){
    //const path = `${environment.API_ROOT}/students`;
    const path = `/students`;
    return this.httpClient.get<Student[]>(path);
  }

  /*getStudentsById(id: string){
    const path = `${environment.API_ROOT}/users/${id}`;
    return this.httpClient.get<Student>(path);
  }*/
}
