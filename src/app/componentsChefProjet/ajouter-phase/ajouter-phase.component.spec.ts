import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterPhaseComponent } from './ajouter-phase.component';

describe('AjouterPhaseComponent', () => {
  let component: AjouterPhaseComponent;
  let fixture: ComponentFixture<AjouterPhaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterPhaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterPhaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
