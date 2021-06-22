import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {

  students: string[] = [];

  constructor(studentService: StudentService) { 
    this.students = studentService.getStudents();
  }

  ngOnInit(): void {
  }

}
