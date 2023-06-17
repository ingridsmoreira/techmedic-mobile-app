import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-back-btn',
  templateUrl: './back-btn.component.html',
  styleUrls: ['./back-btn.component.sass'],
})
export class BackBtnComponent {
  constructor(private location: Location) {}

  goBack() {
    this.location.back();
  }
}
