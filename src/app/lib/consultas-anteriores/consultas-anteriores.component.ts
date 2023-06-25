import { Component, Input } from '@angular/core';
import { RestApiService } from 'src/app/core/data/rest-api.service';
import { cardMedico } from 'src/app/core/model/enum/cardMedico';
import { Especialidades } from 'src/app/core/model/enum/especialidades';
import { CardMedico } from 'src/app/core/model/interfaces/medico.interface';

@Component({
  selector: 'app-consultas-anteriores',
  templateUrl: './consultas-anteriores.component.html',
  styleUrls: ['./consultas-anteriores.component.sass'],
})
export class ConsultasAnterioresComponent {
  consultas: CardMedico[] = [];
  userId = 1;

  constructor(private apiService: RestApiService) {}

  ngOnInit(): void {
    this.apiService
      .getConsultasPassadasUser(this.userId)
      .then((consultas) => (this.consultas = consultas));
  }
}
