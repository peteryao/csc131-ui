import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CustomMaterialModuleModule } from './custom-material-module/custom-material-module.module';

import { AppComponent } from './app.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { TeacherComponent } from './teacher/teacher.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  { path: 'student', component: AttendanceComponent },
  { path: 'teacher', component: TeacherComponent },
  { path: '', component: HomeComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    AttendanceComponent,
    TeacherComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CustomMaterialModuleModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
