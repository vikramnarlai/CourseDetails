import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppCourseDetailsComponent } from './app-course-details/app-course-details.component';
import { AppCoursesComponent } from './app-courses/app-courses.component';
import { AppLoginComponent } from './app-login/app-login.component';

const routes: Routes = [
  {
    path: '',
    component: AppLoginComponent
  },
  {
    path: 'App-Courses',
    component: AppCoursesComponent
  },
  {
    path: 'App-Courses-Details',
    component: AppCourseDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
