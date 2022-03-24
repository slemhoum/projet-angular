import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierProjetComponent } from './modifier-projet.component';

describe('ModifierProjetComponent', () => {
  let component: ModifierProjetComponent;
  let fixture: ComponentFixture<ModifierProjetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierProjetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierProjetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
