import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterMembreComponent } from './ajouter-membre.component';

describe('AjouterMembreComponent', () => {
  let component: AjouterMembreComponent;
  let fixture: ComponentFixture<AjouterMembreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterMembreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterMembreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
