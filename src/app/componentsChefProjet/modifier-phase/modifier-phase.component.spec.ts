import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierPhaseComponent } from './modifier-phase.component';

describe('ModifierPhaseComponent', () => {
  let component: ModifierPhaseComponent;
  let fixture: ComponentFixture<ModifierPhaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierPhaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierPhaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
