import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isShowUserInfo = false;

  constructor(private router: Router) {

  }

  ngOnInit(): void {

  }

  display = "none";

  openModal() {
    this.display = "block";
  }
  onCloseHandled() {
    this.display = "none";
  }
  onLogout() {
    this.router.navigate(['']);
    this.display = "none";
  }


}
