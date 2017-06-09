import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {

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
  }

  private initializeForm(): void {
    this.form = new FormGroup({
      passKey: new FormControl('', Validators.required)
    })
  }
}
