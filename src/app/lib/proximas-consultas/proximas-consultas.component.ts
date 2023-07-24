import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CardMedico } from 'src/app/core/model/interfaces/medico.interface';
import { CalendarioService } from 'src/app/core/services/calendario.service';
import { selectCalendario } from 'src/app/core/state/selectors/calendario.selectors';

@Component({
  selector: 'app-proximas-consultas',
  templateUrl: './proximas-consultas.component.html',
  styleUrls: ['./proximas-consultas.component.sass'],
})
export class ProximasConsultasComponent implements OnInit {
  consultas: CardMedico[] = [];

  constructor(
    private calendarioService: CalendarioService,
    private store: Store
  ) {}

  ngOnInit(): void {
    this.store.select(selectCalendario).subscribe((_calendario) => {
      this.populaDados();
    });
  }

  populaDados() {
    this.calendarioService
      .getConsultas('futuro')
      .then((consultas) => (this.consultas = consultas));
  }
}
