import { DatePipe } from '@angular/common';
import { Injectable } from '@angular/core';
import { Especialidades } from 'src/app/core/model/enum/especialidades';

@Injectable({
  providedIn: 'root',
})
export class Utils {
  constructor(private datePipe: DatePipe) {}

  getEspecialidade(especialidade: Especialidades, sexo: string): string {
    switch (especialidade) {
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
        return sexo === 'M' ? 'Clínico Geral' : 'Clínica Geral';
    }
  }
  getTituloMedico(sexo: string): string {
    return sexo === 'M' ? 'Dr.' : 'Dra.';
  }

  getDataHora(data?: Date): string {
    const dataTxt = this.datePipe.transform(data, 'dd/MM/YYYY - HH:MM');
    return dataTxt ? dataTxt : 'Data não definida';
  }

  getData(data: Date): string {
    const dataCalendario = this.datePipe.transform(data, 'dd/MM/YY');
    return dataCalendario ? dataCalendario : 'erro';
  }

  getDiaDaSemana(data: Date): string {
    const diaIngles = this.datePipe.transform(data, 'E');
    switch (diaIngles) {
      case 'Sun':
        return 'Dom';
      case 'Mon':
        return 'Seg';
      case 'Tue':
        return 'Ter';
      case 'Wed':
        return 'Qua';
      case 'Thu':
        return 'Qui';
      case 'Fri':
        return 'Sex';
      case 'Sat':
      default:
        return 'Sab';
    }
  }
}
