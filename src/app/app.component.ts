import { Component } from '@angular/core';

import { LoadingService } from './loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Student Attendance';
  isStudent: boolean;

  constructor( public loadingService: LoadingService ) {};

  public studentClick(): void {
    this.isStudent = !this.isStudent;
  }
}
