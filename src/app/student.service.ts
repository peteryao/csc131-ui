import { Injectable } from '@angular/core';

@Injectable()
export class StudentService {
  studentId: number;

  constructor() {
    this.studentId = 999999999;
  }

}
