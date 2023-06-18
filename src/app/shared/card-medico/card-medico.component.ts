import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { cardMedico } from 'src/app/core/model/enum/cardMedico';
import { Especialidades } from 'src/app/core/model/enum/especialidades';
import { CardMedico } from 'src/app/core/model/interfaces/medico.interface';
import { Utils } from '../utils/utils';

@Component({
  selector: 'app-card-medico',
  templateUrl: './card-medico.component.html',
  styleUrls: ['./card-medico.component.sass'],
})
export class CardMedicoComponent {
  dummyCardMedico: CardMedico = {
    medicoId: 1,
    sexo: 'F',
    nome: 'Fulano de Tal',
    especialidade: Especialidades.Geral,
    photoUrl:
      'https://img.freepik.com/free-photo/woman-doctor-wearing-lab-coat-with-stethoscope-isolated_1303-29791.jpg?w=996&t=st=1687023610~exp=1687024210~hmac=b8bd5979930214f754b2250664900f96b6a0125107c2836a2a341350be013487',
    data: new Date(),
    tipo: cardMedico.calendario,
    calendarioId: 1,
  };
  @Input() cardMedico: CardMedico = this.dummyCardMedico as CardMedico;

  constructor(private router: Router, private utils: Utils) {}

  getEspecialidadeStr(): string {
    return this.utils.getEspecialidade(
      this.cardMedico.especialidade,
      this.cardMedico.sexo
    );
  }

  getTituloMedico(): string {
    return this.utils.getTituloMedico(this.cardMedico.sexo);
  }

  getHoraConsulta(): string {
    return this.utils.getDataHora(this.cardMedico.data);
  }

  onClick() {
    switch (this.cardMedico.tipo) {
      case cardMedico.calendario:
        console.log('Clicou no calendário');
        break;
      case cardMedico.busca:
      default:
        this.router.navigate(['/medico/' + this.cardMedico.medicoId]);
        break;
    }
  }
}
