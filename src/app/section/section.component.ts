import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { StudentService } from '../student.service';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {

  constructor( private studentService: StudentService, private router: Router ) { }

  ngOnInit() {
  }

  public selectSection(sectionId: number): void {
    this.studentService.section = sectionId;
    this.router.navigate(['/student/attendance']);
  }

}
