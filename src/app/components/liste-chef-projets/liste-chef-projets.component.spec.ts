import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeChefProjetsComponent } from './liste-chef-projets.component';

describe('ListeChefProjetsComponent', () => {
  let component: ListeChefProjetsComponent;
  let fixture: ComponentFixture<ListeChefProjetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeChefProjetsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeChefProjetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
