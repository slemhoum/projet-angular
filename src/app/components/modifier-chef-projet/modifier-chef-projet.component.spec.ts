import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierChefProjetComponent } from './modifier-chef-projet.component';

describe('ModifierChefProjetComponent', () => {
  let component: ModifierChefProjetComponent;
  let fixture: ComponentFixture<ModifierChefProjetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierChefProjetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierChefProjetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
