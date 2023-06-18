import { cardMedico } from '../enum/cardMedico';
import { Especialidades } from '../enum/especialidades';

export interface Medico {
  medicoId: number;
  nome: string;
  descricao: string;
  especialidade: Especialidades;
  photoUrl: string;
  sexo: string;
}

export interface CardMedico {
  calendarioId?: number;
  medicoId: number;
  sexo: string;
  nome: string;
  especialidade: Especialidades;
  photoUrl: string;
  data?: Date;
  tipo: cardMedico;
}
