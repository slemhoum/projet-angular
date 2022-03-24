import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterChefProjetComponent } from './ajouter-chef-projet.component';

describe('AjouterChefProjetComponent', () => {
  let component: AjouterChefProjetComponent;
  let fixture: ComponentFixture<AjouterChefProjetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterChefProjetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterChefProjetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
