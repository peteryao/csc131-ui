import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { StudentService } from '../student.service';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css']
})
export class AttendanceComponent implements OnInit {

  public form: FormGroup;

  constructor(
    private _router: Router,
    private _studentService: StudentService,
    ) { }

  ngOnInit() {
    this.initializeForm();
  }

  public submitForm(): void {
    console.log(this.form.value);
    this._studentService.studentId = this.form.value.studentId;
    this._router.navigate(['student/confirmation']);
  }

  public resetForm(): void {
    this.form.reset();
  }

  private initializeForm(): void {
    this.form = new FormGroup({
      studentId: new FormControl('', Validators.minLength(9)),
      passKey: new FormControl('', Validators.required)
    })
  }

}
