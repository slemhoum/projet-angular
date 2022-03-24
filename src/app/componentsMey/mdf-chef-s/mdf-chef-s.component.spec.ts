import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MdfChefSComponent } from './mdf-chef-s.component';

describe('MdfChefSComponent', () => {
  let component: MdfChefSComponent;
  let fixture: ComponentFixture<MdfChefSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MdfChefSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MdfChefSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
