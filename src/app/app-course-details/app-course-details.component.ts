import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-app-course-details',
  templateUrl: './app-course-details.component.html',
  styleUrls: ['./app-course-details.component.scss']
})
export class AppCourseDetailsComponent implements OnInit {
  cDetails: any;

  constructor(private router: Router,) { }

  /**
   * Fetch data form session storage
   */
  ngOnInit(): void {
    this.cDetails = JSON.parse(sessionStorage.getItem('courseDetails') || '{}');
  }

  /**
   * Nagivate back
   */
  navigateBack() {
    this.router.navigate(['/App-Courses'])
  }

}
