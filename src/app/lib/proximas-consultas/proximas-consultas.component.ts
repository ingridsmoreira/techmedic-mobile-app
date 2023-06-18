import { Component, Input } from '@angular/core';
import { cardMedico } from 'src/app/core/model/enum/cardMedico';
import { Especialidades } from 'src/app/core/model/enum/especialidades';
import { CardMedico } from 'src/app/core/model/interfaces/medico.interface';

@Component({
  selector: 'app-proximas-consultas',
  templateUrl: './proximas-consultas.component.html',
  styleUrls: ['./proximas-consultas.component.sass'],
})
export class ProximasConsultasComponent {
  dummyCardMedico: CardMedico[] = [
    {
      medicoId: 1,
      medicoSexo: 'M',
      medicoNome: 'Fulano de Tal',
      medicoEspecialidade: Especialidades.Geral,
      medicoPhotoUrl:
        'https://img.freepik.com/free-photo/woman-doctor-wearing-lab-coat-with-stethoscope-isolated_1303-29791.jpg?w=996&t=st=1687023610~exp=1687024210~hmac=b8bd5979930214f754b2250664900f96b6a0125107c2836a2a341350be013487',
      data: new Date(),
      tipo: cardMedico.calendario,
      calendarioId: 1,
    },
    {
      medicoId: 2,
      medicoSexo: 'F',
      medicoNome: 'testando de Tal',
      medicoEspecialidade: Especialidades.Pediatra,
      medicoPhotoUrl:
        'https://img.freepik.com/free-photo/woman-doctor-wearing-lab-coat-with-stethoscope-isolated_1303-29791.jpg?w=996&t=st=1687023610~exp=1687024210~hmac=b8bd5979930214f754b2250664900f96b6a0125107c2836a2a341350be013487',
      data: new Date(),
      tipo: cardMedico.calendario,
      calendarioId: 2,
    },
  ];
  @Input() consultas: CardMedico[] = this.dummyCardMedico;
}
