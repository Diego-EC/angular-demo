import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/models/student.model';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {
  students: Student[] = [];

  inputName: string = "";
  inputSurname: string = "";
  inputAge: number = 0;

  constructor(studentService: StudentService) { 
    this.students = studentService.getStudents();
  }

  ngOnInit(): void {
  }

  addStudent(){
    let student = new Student(this.inputName, this.inputSurname, this.inputAge);
    this.students.push(student);
  }

}
