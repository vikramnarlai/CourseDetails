import { Injectable } from '@angular/core';
import { observable, Observable } from "rxjs";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CourseInfoService {

  constructor(private http: HttpClient) { }

  getCourseInfo(): Observable<any> {
    return this.http.get<any>("./assets/mock-data/course.json");
  }
}
