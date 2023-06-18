import { Component } from '@angular/core';
import { Especialidades } from 'src/app/core/model/enum/especialidades';
import { Medico } from 'src/app/core/model/interfaces/medico.interface';

@Component({
  selector: 'app-medico',
  templateUrl: './medico.component.html',
  styleUrls: ['./medico.component.sass'],
})
export class MedicoComponent {
  dummyMedico: Medico = {
    medicoId: 1,
    sexo: 'M',
    nome: 'Fulano de Tal',
    especialidade: Especialidades.Geral,
    photoUrl:
      'https://img.freepik.com/free-photo/woman-doctor-wearing-lab-coat-with-stethoscope-isolated_1303-29791.jpg?w=996&t=st=1687023610~exp=1687024210~hmac=b8bd5979930214f754b2250664900f96b6a0125107c2836a2a341350be013487',
    descricao:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquam sed purus id sagittis. Maecenas porta ipsum a ullamcorper porttitor. Nunc fringilla turpis non eros hendrerit, ut volutpat odio eleifend. Cras fermentum ante nisi, quis facilisis ligula fringilla et. Maecenas.',
  };
}
