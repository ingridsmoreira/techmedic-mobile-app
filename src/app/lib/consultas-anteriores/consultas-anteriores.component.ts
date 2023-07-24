import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { RestApiService } from 'src/app/core/data/rest-api.service';
import { cardMedico } from 'src/app/core/model/enum/cardMedico';
import { Especialidades } from 'src/app/core/model/enum/especialidades';
import { CardMedico } from 'src/app/core/model/interfaces/medico.interface';
import { CalendarioService } from 'src/app/core/services/calendario.service';
import { selectCalendario } from 'src/app/core/state/selectors/calendario.selectors';

@Component({
  selector: 'app-consultas-anteriores',
  templateUrl: './consultas-anteriores.component.html',
  styleUrls: ['./consultas-anteriores.component.sass'],
})
export class ConsultasAnterioresComponent {
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
      .getConsultas('passado')
      .then((consultas) => (this.consultas = consultas));
  }
}
