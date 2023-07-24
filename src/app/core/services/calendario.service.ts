import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Calendario } from '../model/interfaces/calendario.interface';
import {
  Observable,
  combineLatest,
  firstValueFrom,
  map,
  switchMap,
  take,
} from 'rxjs';
import { apiConstants } from './default.service';
import { selectCalendario } from '../state/selectors/calendario.selectors';
import { CardMedico } from '../model/interfaces/medico.interface';
import { selectMedico } from '../state/selectors/medico.selectors';
import { cardMedico } from '../model/enum/cardMedico';
import { debug } from 'console';

@Injectable({ providedIn: 'root' })
export class CalendarioService {
  constructor(private http: HttpClient, private store: Store) {}

  getCalendarioUser(userId: number): Observable<Calendario[]> {
    return this.http
      .get<Calendario[]>(
        apiConstants.apiUrl + '/calendario/getUser?userId=' + userId
      )
      .pipe(map((calendario) => calendario || []));
  }

  getCalendarioMedico(medicoId: number): Observable<Calendario[]> {
    return this.http
      .get<Calendario[]>(
        apiConstants.apiUrl + '/calendario/getMedico?medicoId=' + medicoId
      )
      .pipe(map((calendario) => calendario || []));
  }

  deleteCalendario(id: number): Observable<Calendario[]> {
    return this.http
      .delete<Calendario[]>(apiConstants.apiUrl + '/calendario/delete?id=' + id)
      .pipe(map((calendario) => calendario || []));
  }

  criarCalendario(calendario: Calendario): Observable<Calendario[]> {
    return this.http
      .post<Calendario[]>(
        apiConstants.apiUrl + '/calendario/create',
        JSON.stringify(calendario)
      )
      .pipe(map((calendario) => calendario || []));
  }

  getCalendario(calendarioId: number): Observable<Calendario[]> {
    return this.store
      .select(selectCalendario)
      .pipe(
        map(
          (calendarios: Calendario[]) =>
            calendarios.filter((calend) => calend.id === calendarioId) || []
        )
      );
  }

  getUserCalendarioCard(): Observable<CardMedico[]> {
    return combineLatest([
      this.store.select(selectMedico),
      this.store.select(selectCalendario),
    ]).pipe(
      map(([medicos, calendarios]) => {
        const cards: CardMedico[] = [];
        calendarios.forEach((calendario) => {
          const medico = medicos.find(
            (medico) => medico.id === calendario.medicoId
          );
          if (medico) {
            const card: CardMedico = {
              calendarioId: calendario.id,
              medicoId: medico.id,
              nome: medico.nome,
              sexo: medico.sexo,
              especialidade: medico.especialidade,
              data: calendario.data,
              photoUrl: medico.photoUrl,
              tipo: cardMedico.calendario,
            };
            cards.push(card);
          }
        });
        return cards;
      })
    );
  }

  async getConsultas(tipo: string): Promise<CardMedico[]> {
    const now = new Date();
    const cards = await firstValueFrom(this.getUserCalendarioCard());
    if (tipo === 'passado') {
      return cards.filter((card) =>
        card.data ? new Date(card.data.toString()) < now : false
      );
    } else if (tipo === 'futuro') {
      return cards.filter((card) =>
        card.data ? new Date(card.data.toString()) > now : false
      );
    } else {
      return [];
    }
  }
}
