import { Component } from '@angular/core';
import { CalendarioConsulta } from 'src/app/core/model/interfaces/calendario.interface';

@Component({
  selector: 'app-proximas-consultas',
  templateUrl: './proximas-consultas.component.html',
  styleUrls: ['./proximas-consultas.component.sass'],
})
export class ProximasConsultasComponent {
  consultas: CalendarioConsulta[] = [];
}
