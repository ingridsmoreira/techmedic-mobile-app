import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-especialidades',
  templateUrl: './especialidades.component.html',
  styleUrls: ['./especialidades.component.sass'],
  encapsulation: ViewEncapsulation.None,
})
export class EspecialidadesComponent {
  constructor(private router: Router) {}

  onCardClick(especialidade: string) {
    this.router.navigate(['/busca', especialidade]);
  }
}
