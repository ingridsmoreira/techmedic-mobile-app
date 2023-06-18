import { cardMedico } from '../enum/cardMedico';
import { Especialidades } from '../enum/especialidades';

export interface Medico {
  medicoId: number;
  nome: string;
  descricao: string;
  especialidade: Especialidades;
  photoUrl: string;
}

export interface CardMedico {
  calendarioId?: number;
  medicoId: number;
  medicoSexo: string;
  medicoNome: string;
  medicoEspecialidade: Especialidades;
  medicoPhotoUrl: string;
  data?: Date;
  tipo: cardMedico;
}
