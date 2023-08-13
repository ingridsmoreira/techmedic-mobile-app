import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.sass'],
})
export class UsuarioComponent {
  constructor(private router: Router) {}
  formularioSubmetido(event: boolean) {
    if (event) {
      this.router.navigate(['/home']);
    }
  }
}
