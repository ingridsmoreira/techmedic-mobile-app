import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.sass'],
})
export class SplashComponent {
  constructor(private router: Router) {
    setTimeout(() => {
      this.router.navigate(['/welcome']);
    }, 5000);
  }
}
