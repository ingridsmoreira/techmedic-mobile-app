import { Component } from '@angular/core';
import { cardMedico } from 'src/app/core/model/enum/cardMedico';
import { Especialidades } from 'src/app/core/model/enum/especialidades';
import { CardMedico } from 'src/app/core/model/interfaces/medico.interface';

@Component({
  selector: 'app-busca-res',
  templateUrl: './busca-res.component.html',
  styleUrls: ['./busca-res.component.sass'],
})
export class BuscaResComponent {
  dummyCardMedico: CardMedico[] = [
    {
      medicoId: 1,
      sexo: 'M',
      nome: 'Fulano de Tal',
      especialidade: Especialidades.Geral,
      photoUrl:
        'https://img.freepik.com/free-photo/woman-doctor-wearing-lab-coat-with-stethoscope-isolated_1303-29791.jpg?w=996&t=st=1687023610~exp=1687024210~hmac=b8bd5979930214f754b2250664900f96b6a0125107c2836a2a341350be013487',
      tipo: cardMedico.busca,
    },
    {
      medicoId: 2,
      sexo: 'F',
      nome: 'testando de Tal',
      especialidade: Especialidades.Geral,
      photoUrl:
        'https://img.freepik.com/free-photo/woman-doctor-wearing-lab-coat-with-stethoscope-isolated_1303-29791.jpg?w=996&t=st=1687023610~exp=1687024210~hmac=b8bd5979930214f754b2250664900f96b6a0125107c2836a2a341350be013487',
      tipo: cardMedico.busca,
    },
  ];
  medicos: CardMedico[] = this.dummyCardMedico;
}
