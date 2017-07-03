import { Component, OnInit, Input } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';

import { AttendanceService } from '../attendance.service';

@Component({
  selector: 'app-teacher-dialog',
  templateUrl: './teacher-dialog.component.html',
  styleUrls: ['./teacher-dialog.component.css']
})
export class TeacherDialogComponent implements OnInit {
  public keyList = [];

  constructor(
    public dialogRef: MdDialogRef<TeacherDialogComponent>,
    private attendanceService: AttendanceService) { }

  ngOnInit() {
    const keyResponse = this.attendanceService.getKey().subscribe((res) => {
      for (const section in res) {
        if (res.hasOwnProperty(section)) {
          this.keyList.push([this.determineSection(section), res[section]]);
        }
      }
    });
  }

  public activeKeys(): boolean {
    for (const section in this.keyList) {
      if (section[1] !== null) {
        return true;
      }
    }
    return false;
  }

  private determineSection(input: string): string {
    if (input === 'key1') {
      return 'CSC131 - 1';
    }
    if (input === 'key2') {
      return 'CSC131 - 2';
    }
    return 'CSC 131';
  }
}
