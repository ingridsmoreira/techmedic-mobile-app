import { cardMedico } from '../enum/cardMedico';
import { Especialidades } from '../enum/especialidades';

export interface Medico {
  id: number;
  nome: string;
  descricao: string;
  especialidade: Especialidades;
  photoUrl: string;
  sexo: string;
  telefone?: string;
}

export interface CardMedico {
  calendarioId?: number;
  medicoId: number;
  sexo: string;
  nome: string;
  especialidade: Especialidades;
  photoUrl: string;
  data?: string;
  telefone?: string;
  tipo: cardMedico;
}
