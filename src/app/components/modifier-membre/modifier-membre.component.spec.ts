import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierMembreComponent } from './modifier-membre.component';

describe('ModifierMembreComponent', () => {
  let component: ModifierMembreComponent;
  let fixture: ComponentFixture<ModifierMembreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierMembreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierMembreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
