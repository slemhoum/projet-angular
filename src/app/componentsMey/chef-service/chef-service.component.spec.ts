import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefServiceComponent } from './chef-service.component';

describe('ChefServiceComponent', () => {
  let component: ChefServiceComponent;
  let fixture: ComponentFixture<ChefServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChefServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChefServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
