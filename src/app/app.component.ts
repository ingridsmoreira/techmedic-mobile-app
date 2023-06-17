import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  title = 'techmedic-mobile-app';
  constructor(private matIconRegistry: MatIconRegistry) {
    this.matIconRegistry.addSvgIcon(
      'facebook_colorido',
      'assets/icons/facebook.svg'
    );
    this.matIconRegistry.addSvgIcon(
      'google_colorido',
      'assets/icons/google.svg'
    );
  }
}
