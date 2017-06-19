import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { AttendanceService } from '../attendance.service';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {

  public form: FormGroup;
  public key: string;

  constructor( private attendanceService: AttendanceService ) {};

  ngOnInit() {
    this.initializeForm();
  }

  public getCurrentKey(): void {
   this.attendanceService.getKey().subscribe((term) => {
     console.log(term);
     this.key = term['key'];
   });
  }

  public submitForm(): void {
    console.log(this.form.value);
    this.key = this.form.controls['passKey'].value;
    this.attendanceService.setKey(this.key).subscribe((response) => {
      console.log(response);
    });
  }

  public resetForm(): void {
    this.form.reset();
  }

  private initializeForm(): void {
    this.form = new FormGroup({
      passKey: new FormControl('', Validators.required)
    })
  }
}
