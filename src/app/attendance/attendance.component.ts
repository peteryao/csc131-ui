import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css']
})
export class AttendanceComponent implements OnInit {

  public form: FormGroup;

  constructor() { }

  ngOnInit() {
    this.initializeForm();
  }

  public submitForm(): void {
    console.log(this.form.value);
  }

  public resetForm(): void {
    this.form.reset();
    // this.initializeForm();
  }

  private initializeForm(): void {
    this.form = new FormGroup({
      studentId: new FormControl('', Validators.minLength(9)),
      passKey: new FormControl('', Validators.required)
    })
  }

}
