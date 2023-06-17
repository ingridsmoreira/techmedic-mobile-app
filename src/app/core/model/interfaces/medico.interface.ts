import { Especialidades } from '../enum/especialidades';

export interface Medico {
  medicoId: number;
  nome: string;
  descricao: string;
  especialidade: Especialidades;
  photoUrl: string;
}
