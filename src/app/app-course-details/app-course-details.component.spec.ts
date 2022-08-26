import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppCourseDetailsComponent } from './app-course-details.component';

describe('AppCourseDetailsComponent', () => {
  let component: AppCourseDetailsComponent;
  let fixture: ComponentFixture<AppCourseDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppCourseDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppCourseDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
