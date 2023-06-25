import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BuscaInputFieldComponent } from './busca.component';

describe('BuscaComponent', () => {
  let component: BuscaInputFieldComponent;
  let fixture: ComponentFixture<BuscaInputFieldComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuscaInputFieldComponent],
    });
    fixture = TestBed.createComponent(BuscaInputFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
