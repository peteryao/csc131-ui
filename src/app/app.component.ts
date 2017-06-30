import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { LoadingService } from './loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Student Attendance';
  isStudent: boolean;

  constructor( public loadingService: LoadingService, private router: Router ) {};

  public studentClick(): void {
    this.isStudent = !this.isStudent;
  }

  public isHome(): boolean {
    return this.router.url === '/';
  }

  public returnHome(): void {
    this.router.navigate(['/']);
  }
}
