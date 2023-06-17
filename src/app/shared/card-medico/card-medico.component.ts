import { DatePipe } from '@angular/common';
import { Component, Input, ViewEncapsulation } from '@angular/core';
import { cardMedico } from 'src/app/core/model/enum/cardMedico';
import { Especialidades } from 'src/app/core/model/enum/especialidades';
import { CardMedico } from 'src/app/core/model/interfaces/medico.interface';

@Component({
  selector: 'app-card-medico',
  templateUrl: './card-medico.component.html',
  styleUrls: ['./card-medico.component.sass'],
})
export class CardMedicoComponent {
  dummyCardMedico: CardMedico = {
    medicoId: 1,
    medicoSexo: 'F',
    medicoNome: 'Fulano de Tal',
    medicoEspecialidade: Especialidades.Geral,
    medicoPhotoUrl:
      'https://img.freepik.com/free-photo/woman-doctor-wearing-lab-coat-with-stethoscope-isolated_1303-29791.jpg?w=996&t=st=1687023610~exp=1687024210~hmac=b8bd5979930214f754b2250664900f96b6a0125107c2836a2a341350be013487',
    data: new Date(),
    hora: '08:00',
    tipo: cardMedico.calendario,
  };
  @Input() cardMedico: CardMedico = this.dummyCardMedico as CardMedico;

  constructor(private datePipe: DatePipe) {}

  getEspecialidadeStr(): string {
    switch (this.cardMedico.medicoEspecialidade) {
      case Especialidades.Pediatra:
        return 'Pediatra';
      case Especialidades.Ginecologista:
        return 'Ginecologista';
      case Especialidades.Dentista:
        return 'Dentista';
      case Especialidades.Nutricionista:
        return 'Nutricionista';
      case Especialidades.Endocrinologista:
        return 'Endocrinologista';
      case Especialidades.Dermatologista:
        return 'Dermatologista';
      case Especialidades.Oftalmologista:
        return 'Oftalmologista';
      case Especialidades.Geral:
      default:
        return this.cardMedico.medicoSexo === 'M'
          ? 'Clínico Geral'
          : 'Clínica Geral';
    }
  }

  getHoraConsulta(): string {
    const data = this.datePipe.transform(this.cardMedico.data, 'dd/MM/YYYY');
    const hora = this.cardMedico.hora ? this.cardMedico.hora : 'erro';
    return data + ' - ' + hora;
  }
}
