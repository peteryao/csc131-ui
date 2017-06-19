import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { FlexLayoutModule } from '@angular/flex-layout';

import { CustomMaterialModuleModule } from './custom-material-module/custom-material-module.module';

import { AppComponent } from './app.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { TeacherComponent } from './teacher/teacher.component';
import { HomeComponent } from './home/home.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { StudentComponent } from './student/student.component';
import { StudentService } from './student.service';
import { AttendanceService } from './attendance.service';

const appRoutes: Routes = [
  { path: 'student', component: StudentComponent,
    children: [
      { path: '', redirectTo: 'attendance', pathMatch: 'full' },
      { path: 'attendance', component: AttendanceComponent },
      { path: 'confirmation', component: ConfirmationComponent }
    ]},
  { path: 'teacher', component: TeacherComponent },
  { path: '', component: HomeComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    AttendanceComponent,
    TeacherComponent,
    HomeComponent,
    ConfirmationComponent,
    StudentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CustomMaterialModuleModule,
    FlexLayoutModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [StudentService, AttendanceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
