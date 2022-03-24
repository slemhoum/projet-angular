import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeChefServiceComponent } from './home-chef-service.component';

describe('HomeChefServiceComponent', () => {
  let component: HomeChefServiceComponent;
  let fixture: ComponentFixture<HomeChefServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeChefServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeChefServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
