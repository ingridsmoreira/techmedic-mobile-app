import { Component, Input, OnInit } from '@angular/core';
import { RestApiService } from 'src/app/core/data/rest-api.service';
import { cardMedico } from 'src/app/core/model/enum/cardMedico';
import { Especialidades } from 'src/app/core/model/enum/especialidades';
import { CardMedico } from 'src/app/core/model/interfaces/medico.interface';

@Component({
  selector: 'app-proximas-consultas',
  templateUrl: './proximas-consultas.component.html',
  styleUrls: ['./proximas-consultas.component.sass'],
})
export class ProximasConsultasComponent implements OnInit {
  consultas: CardMedico[] = [];
  userId = 1;

  constructor(private apiService: RestApiService) {}

  ngOnInit(): void {
    this.apiService
      .getProximasConsultasUser(this.userId)
      .then((consultas) => (this.consultas = consultas));
  }
}
