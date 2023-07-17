import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticaOneComponent } from './practica-one.component';

describe('PracticaOneComponent', () => {
  let component: PracticaOneComponent;
  let fixture: ComponentFixture<PracticaOneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PracticaOneComponent]
    });
    fixture = TestBed.createComponent(PracticaOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
