import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppCoursesComponent } from './app-courses.component';

describe('AppCoursesComponent', () => {
  let component: AppCoursesComponent;
  let fixture: ComponentFixture<AppCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppCoursesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
