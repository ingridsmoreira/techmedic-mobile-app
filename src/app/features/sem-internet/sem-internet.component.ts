import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-sem-internet',
  templateUrl: './sem-internet.component.html',
  styleUrls: ['./sem-internet.component.sass'],
})
export class SemInternetComponent {
  constructor(private location: Location) {}
  tentarNovamente() {
    this.location.back();
  }
}
