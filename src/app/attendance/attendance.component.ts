import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { StudentService } from '../student.service';
import { SheetService } from '../sheet.service';

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
    private _sheetService: SheetService
    ) { }

  ngOnInit() {
    this.initializeForm();
  }

  public submitForm(): void {
    console.log(this.form.value);
    this._studentService.studentId = this.form.value.studentId;
    this._sheetService.getStudents().forEach((value) => console.log(value));
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
