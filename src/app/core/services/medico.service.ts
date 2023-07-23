import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Medico } from '../model/interfaces/medico.interface';
import { apiConstants } from './default.service';

@Injectable({ providedIn: 'root' })
export class MedicoService {
  constructor(private http: HttpClient) {}
  getAllMedicos(): Observable<Medico[]> {
    return this.http
      .get<Medico[]>(apiConstants.apiUrl + '/medico/all')
      .pipe(map((medicos) => medicos || []));
  }

  getMedico(medicoId: number): Observable<Medico[]> {
    return this.http
      .get<Medico[]>(apiConstants.apiUrl + '/medico/get?medicoId=' + medicoId)
      .pipe(map((medico) => medico || []));
  }

  buscaEspecialidade(especialidade: string): Observable<Medico[]> {
    return this.http
      .get<Medico[]>(
        apiConstants.apiUrl + '/medico/get?especialidade=' + especialidade
      )
      .pipe(map((medico) => medico || []));
  }
}
