import { Component } from '@angular/core';
import { CardMedico } from 'src/app/core/model/interfaces/medico.interface';

@Component({
  selector: 'app-proximas-consultas',
  templateUrl: './proximas-consultas.component.html',
  styleUrls: ['./proximas-consultas.component.sass'],
})
export class ProximasConsultasComponent {
  consultas: CardMedico[] = [];
}
