import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SemInternetComponent } from './sem-internet.component';

describe('SemInternetComponent', () => {
  let component: SemInternetComponent;
  let fixture: ComponentFixture<SemInternetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SemInternetComponent]
    });
    fixture = TestBed.createComponent(SemInternetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
