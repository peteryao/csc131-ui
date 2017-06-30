import { Component, OnInit, Input } from '@angular/core';

import { StudentService } from '../student.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
  studentId: number;
  studentName: string;
  success: boolean;

  constructor( private _studentService: StudentService ) { }

  ngOnInit() {
    this.studentId = this._studentService.studentId;
    this.studentName = this._studentService.name;
    this.success = this._studentService.success;
  }

}
