import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetInicioComponent } from './pet-inicio.component';

describe('PetInicioComponent', () => {
  let component: PetInicioComponent;
  let fixture: ComponentFixture<PetInicioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetInicioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
