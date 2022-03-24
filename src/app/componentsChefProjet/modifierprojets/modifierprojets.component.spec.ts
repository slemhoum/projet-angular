import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierprojetsComponent } from './modifierprojets.component';

describe('ModifierprojetsComponent', () => {
  let component: ModifierprojetsComponent;
  let fixture: ComponentFixture<ModifierprojetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierprojetsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierprojetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
