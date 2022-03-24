import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeChefProjetComponent } from './home-chef-projet.component';

describe('HomeChefProjetComponent', () => {
  let component: HomeChefProjetComponent;
  let fixture: ComponentFixture<HomeChefProjetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeChefProjetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeChefProjetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
