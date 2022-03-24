import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarAccComponent } from './navbar-acc.component';

describe('NavbarAccComponent', () => {
  let component: NavbarAccComponent;
  let fixture: ComponentFixture<NavbarAccComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarAccComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarAccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
