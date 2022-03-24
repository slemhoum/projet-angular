import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MdfAccComponent } from './mdf-acc.component';

describe('MdfAccComponent', () => {
  let component: MdfAccComponent;
  let fixture: ComponentFixture<MdfAccComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MdfAccComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MdfAccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
