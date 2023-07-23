import { Component, Input, OnInit } from '@angular/core';
import { CardMedico } from 'src/app/core/model/interfaces/medico.interface';
import { CalendarioService } from 'src/app/core/services/calendario.service';

@Component({
  selector: 'app-proximas-consultas',
  templateUrl: './proximas-consultas.component.html',
  styleUrls: ['./proximas-consultas.component.sass'],
})
export class ProximasConsultasComponent implements OnInit {
  consultas: CardMedico[] = [];
  userId = 1;

  constructor(private calendarioService: CalendarioService) {}

  ngOnInit(): void {
    this.calendarioService
      .getConsultas('futuro')
      .then((consultas) => (this.consultas = consultas));
  }
}
