import { Component, Input, OnInit } from '@angular/core';
import { Student } from 'src/app/models/student.model';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {
  @Input() student: Student;
  @Input() index: number;

  constructor() { }

  ngOnInit(): void {
  }

}
