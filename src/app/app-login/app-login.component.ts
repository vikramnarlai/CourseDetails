import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-app-login',
  templateUrl: './app-login.component.html',
  styleUrls: ['./app-login.component.scss']
})
export class AppLoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  /**
   * Nagivate to course details section
   */
  navigateToCourse() {
    this.router.navigate(['/App-Courses'])
  }

}
