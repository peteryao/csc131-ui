import { Injectable } from '@angular/core';

@Injectable()
export class StudentService {
  studentId: number;
  section: number;
  name: string;
  success = false;

  constructor() {
    this.studentId = 999999999;
    this.section = 0;
    this.name = 'temp';
  }

}
