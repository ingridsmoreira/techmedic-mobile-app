import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.sass'],
})
export class CadastroComponent {
  constructor(private router: Router) {}

  onTentarCadastro(event: any) {
    if (event) {
      this.router.navigate(['/home']);
    }
  }

  onLoginClick() {
    this.router.navigate(['/login']);
  }
}
