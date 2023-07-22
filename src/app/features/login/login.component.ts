import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
})
export class LoginComponent {
  constructor(private router: Router) {}

  onCadastroClick() {
    this.router.navigate(['/cadastro']);
  }

  onLoginClick(event: boolean) {
    if (event) {
      this.router.navigate(['/home']);
    }
  }
}
