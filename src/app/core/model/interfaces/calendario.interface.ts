export interface Calendario {
  id: number;
  userId: number;
  medicoId: number;
  data: Date;
  hora: string;
}

export interface CalendarioConsulta {
  calendarioId: number;
  medicoId: number;
  medicoSexo: string;
  medicoNome: string;
  medicoEspecialidade: string;
  medicoPhotoUrl: string;
  data: Date;
  hora: string;
}
