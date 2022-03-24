import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterMembre1Component } from './ajouter-membre1.component';

describe('AjouterMembre1Component', () => {
  let component: AjouterMembre1Component;
  let fixture: ComponentFixture<AjouterMembre1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterMembre1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterMembre1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
