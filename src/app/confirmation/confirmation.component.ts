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
  message: string;

  constructor( private _studentService: StudentService ) { }

  ngOnInit() {
    this.studentId = this._studentService.studentId;
    this.studentName = this._studentService.name;
    this.success = this._studentService.success;
    this.message = this._studentService.message;
  }

  public userFeedback(): string {
    if (this.message === 'Invalid Key') {
      return 'The key you submitted is invalid, please try again or contact your professor.';
    } else if (this.message === 'Already Sumbitted') {
      return 'You have already checked in. If you believe this is incorrect, please contact your professor.';
    } else {
      return 'There was an error with your submission, please try again or contact your professor.';
    }
  }

}
