import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopNavBarChefServiceComponent } from './top-nav-bar-chef-service.component';

describe('TopNavBarChefServiceComponent', () => {
  let component: TopNavBarChefServiceComponent;
  let fixture: ComponentFixture<TopNavBarChefServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopNavBarChefServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopNavBarChefServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
