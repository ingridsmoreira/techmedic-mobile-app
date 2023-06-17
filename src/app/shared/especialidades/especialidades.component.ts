import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-especialidades',
  templateUrl: './especialidades.component.html',
  styleUrls: ['./especialidades.component.sass'],
  encapsulation: ViewEncapsulation.None,
})
export class EspecialidadesComponent {
  onCardClick(especialidade: string) {
    console.log(especialidade);
  }
}
