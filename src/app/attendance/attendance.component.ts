import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { StudentService } from '../student.service';
import { AttendanceService } from '../attendance.service';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css']
})
export class AttendanceComponent implements OnInit {

  public form: FormGroup;
  private latitude;
  private longitude;

  constructor(
    private _router: Router,
    private _studentService: StudentService,
    private _attendanceService: AttendanceService
  ) { }

  ngOnInit() {
    this.initializeForm();
  }

  public submitForm(): void {
    console.log(this.form.value);
    this._studentService.studentId = this.form.value.studentId;
    navigator.geolocation.getCurrentPosition((position) => {
      this.latitude = position.coords.latitude;
      this.longitude = position.coords.longitude;
      this.sendFormToServer();
    });
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

  private sendFormToServer(): void {
    this._attendanceService.submitAttendance(
      this.form.controls['passKey'].value,
      this.form.controls['studentId'].value,
      this._studentService.section,
      this.latitude,
      this.longitude
    ).subscribe((response) => {
      console.log(response);
      console.log(response.name);
      this._studentService.name = String(response.name);
      this._studentService.studentId = this.form.controls['studentId'].value;
      this._router.navigate(['student/confirmation']);
    });
  }
}
