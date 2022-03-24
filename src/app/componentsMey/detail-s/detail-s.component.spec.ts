import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailSComponent } from './detail-s.component';

describe('DetailSComponent', () => {
  let component: DetailSComponent;
  let fixture: ComponentFixture<DetailSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
