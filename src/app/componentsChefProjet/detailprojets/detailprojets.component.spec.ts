import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailprojetsComponent } from './detailprojets.component';

describe('DetailprojetsComponent', () => {
  let component: DetailprojetsComponent;
  let fixture: ComponentFixture<DetailprojetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailprojetsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailprojetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
