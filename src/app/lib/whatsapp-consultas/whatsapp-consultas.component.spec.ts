import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatsappConsultasComponent } from './whatsapp-consultas.component';

describe('WhatsappConsultasComponent', () => {
  let component: WhatsappConsultasComponent;
  let fixture: ComponentFixture<WhatsappConsultasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WhatsappConsultasComponent]
    });
    fixture = TestBed.createComponent(WhatsappConsultasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
