import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsgDangerComponent } from './msg-danger.component';

describe('SmgDangerComponent', () => {
  let component: MsgDangerComponent;
  let fixture: ComponentFixture<MsgDangerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MsgDangerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MsgDangerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
