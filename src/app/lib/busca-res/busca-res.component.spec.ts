import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscaResComponent } from './busca-res.component';

describe('BuscaResComponent', () => {
  let component: BuscaResComponent;
  let fixture: ComponentFixture<BuscaResComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuscaResComponent]
    });
    fixture = TestBed.createComponent(BuscaResComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
