import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardMedicoComponent } from './card-medico.component';

describe('CardMedicoComponent', () => {
  let component: CardMedicoComponent;
  let fixture: ComponentFixture<CardMedicoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardMedicoComponent]
    });
    fixture = TestBed.createComponent(CardMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
