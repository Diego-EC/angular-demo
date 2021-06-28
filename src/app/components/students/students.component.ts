import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Student } from 'src/app/models/student.model';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {
  students: Student[] = [];

  addStudentForm = this.formBuilder.group({
    name: [''],
    surname: [''],
    age: [''],
  });

  constructor(private studentService: StudentService, private formBuilder: FormBuilder) { 
    this.getStudents();
  }

  getStudents(){
    this.studentService.getStudents().subscribe(students => this.students = students);
  }

  ngOnInit(): void {
  }

  addStudent(){
    let student = new Student(this.addStudentForm.value["name"], this.addStudentForm.value["surname"], 
      this.addStudentForm.value["age"]);
    this.students.push(student);
    this.cleanStudentForm();
  }

  cleanStudentForm(){
    this.addStudentForm.patchValue({
      name: [''],
      surname: [''],
      age: [''],
    });
  }
}
