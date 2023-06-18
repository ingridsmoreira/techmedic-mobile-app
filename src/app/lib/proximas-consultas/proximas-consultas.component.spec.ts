import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProximasConsultasComponent } from './proximas-consultas.component';

describe('ProximasConsultasComponent', () => {
  let component: ProximasConsultasComponent;
  let fixture: ComponentFixture<ProximasConsultasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProximasConsultasComponent]
    });
    fixture = TestBed.createComponent(ProximasConsultasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
