import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiConstants } from './default.service';
import { Notificacoes } from '../model/interfaces/notificacoes.interface';
import { Observable, map } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class NotificacoesService {
  constructor(private http: HttpClient) {}

  getNotificacoes(userId: number): Observable<Notificacoes[]> {
    return this.http
      .get<Notificacoes[]>(
        apiConstants.apiUrl + '/notificacoes/get?userId=' + userId
      )
      .pipe(
        map((notificacoes) => {
          return notificacoes || [];
        })
      );
  }

  createNotificacoes(notificacao: Notificacoes): Observable<Notificacoes[]> {
    return this.http
      .post<Notificacoes[]>(
        apiConstants.apiUrl + '/notificacoes/create',
        JSON.stringify(notificacao)
      )
      .pipe(map((notificacoes) => notificacoes || []));
  }

  vizualiarNotificacoes(userId: number): Observable<Notificacoes[]> {
    const body = JSON.stringify({ userId: userId });
    return this.http
      .put<Notificacoes[]>(
        apiConstants.apiUrl + '/notificacoes/vizualizar',
        body
      )
      .pipe(map((notificacoes) => notificacoes || []));
  }

  deleteNotificacoes(userId: number): Observable<Notificacoes[]> {
    return this.http.delete<Notificacoes[]>(
      apiConstants.apiUrl + '/notificacoes/delete?userId=' + userId
    );
  }
}
