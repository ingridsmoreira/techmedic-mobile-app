import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { RestApiService } from 'src/app/core/data/rest-api.service';
import { cardMedico } from 'src/app/core/model/enum/cardMedico';
import { Especialidades } from 'src/app/core/model/enum/especialidades';
import {
  CardMedico,
  Medico,
} from 'src/app/core/model/interfaces/medico.interface';

@Component({
  selector: 'app-busca-res',
  templateUrl: './busca-res.component.html',
  styleUrls: ['./busca-res.component.sass'],
})
export class BuscaResComponent implements OnChanges {
  @Input() buscaRes: Medico[] = [];
  medicos: CardMedico[] = [];

  constructor() {}

  ngOnChanges(): void {
    this.medicos = [];
    this.convertMedicosEmCard();
  }

  convertMedicosEmCard() {
    if (this.buscaRes.length > 0)
      this.buscaRes.forEach((med) => {
        const card: CardMedico = {
          medicoId: med.id,
          photoUrl: med.photoUrl,
          nome: med.nome,
          sexo: med.sexo,
          especialidade: med.especialidade,
          tipo: cardMedico.busca,
        };
        this.medicos.push(card);
      });
  }
}
