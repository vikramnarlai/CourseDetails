import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourseInfoService } from '../shared/components/services/course-info.service'

@Component({
  selector: 'app-app-courses',
  templateUrl: './app-courses.component.html',
  styleUrls: ['./app-courses.component.scss']
})
export class AppCoursesComponent implements OnInit {
  resultData: any;

  constructor(private router: Router, private courseInfo: CourseInfoService) { }

  ngOnInit(): void {
    this.fetchCourses()
  }

  /**
   * Fetch course information from course info service
   */
  private fetchCourses() {
    this.courseInfo.getCourseInfo().subscribe((res) => {
      this.resultData = res;
    });
  }

  /**
   * Navigat to course-details page with information
   * @param cInfo 
   */
  public nagivateToDetails(cInfo: any) {
    sessionStorage.setItem('courseDetails', JSON.stringify(cInfo));
    this.router.navigate(['/App-Courses-Details'])
  }

}
