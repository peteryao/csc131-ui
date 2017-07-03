import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MdDialog, MdDialogRef } from '@angular/material';

import { AttendanceService } from '../attendance.service';
import { TeacherDialogComponent } from '../teacher-dialog/teacher-dialog.component';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {

  public form: FormGroup;
  public key: string;
  public section: number;
  public validTeacher: boolean;
  public password: string;
  public sections = [1, 2]

  constructor( private attendanceService: AttendanceService, public dialog: MdDialog ) {};

  ngOnInit() {
    this.initializeForm();
  }

  public getCurrentKey(): void {
   this.attendanceService.getKey().subscribe((term) => {
     console.log(term);
     this.key = term['key'];
   });
   const dialogRef = this.dialog.open(TeacherDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log('closed');
    });
  }

  public submitForm(): void {
    console.log(this.form.value);
    this.key = this.form.controls['passKey'].value;
    this.section = this.form.controls['sectionNumber'].value;
    this.attendanceService.setKey(this.key, this.section).subscribe((response) => {
      console.log(response);
    });
  }

  public resetForm(): void {
    this.form.reset();
  }

  private initializeForm(): void {
    this.form = new FormGroup({
      passKey: new FormControl('', Validators.required),
      sectionNumber: new FormControl('', Validators.required)
    })
  }

  public randomKey(): void {
    // Generate a random key of length 5
    const random = Math.random().toString(36).substring(2, 7);
    this.form.controls['passKey'].setValue(random);
  }

  public checkTeacher(): void {
    if (this.password === 'root') {
      this.validTeacher = true;
    }
  }
}
