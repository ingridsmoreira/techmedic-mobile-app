import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarioAgendadoComponent } from './calendario-agendado.component';

describe('CalendarioAgendadoComponent', () => {
  let component: CalendarioAgendadoComponent;
  let fixture: ComponentFixture<CalendarioAgendadoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalendarioAgendadoComponent]
    });
    fixture = TestBed.createComponent(CalendarioAgendadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
