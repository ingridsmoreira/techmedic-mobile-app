import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/interfaces/user.interface';
import {
  Observable,
  catchError,
  firstValueFrom,
  map,
  retry,
  throwError,
} from 'rxjs';
import { CardMedico, Medico } from '../model/interfaces/medico.interface';
import { Calendario } from '../model/interfaces/calendario.interface';
import { Notificacoes } from '../model/interfaces/notificacoes.interface';
import { cardMedico } from '../model/enum/cardMedico';

@Injectable({
  providedIn: 'root',
})
export class RestApiService {
  md5 = require('md5');
  apiURL2 = 'http://localhost:3000';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': 'true',
      'Access-Control-Allow-Headers': '*',
      'Access-Control-Allow-Methods': '*',
      key: 'x-api-key',
    }),
  };

  constructor(private http: HttpClient) {}

  //user

  getCalendarioUser(userId: number): Observable<Calendario[]> {
    return this.http
      .get<Calendario[]>(this.apiURL2 + '/calendario/getUser?userId=' + userId)
      .pipe(retry(1), catchError(this.handleError));
  }

  // // Medico
  // getAllMedicos(): Observable<Medico[]> {
  //   return this.http
  //     .get<Medico[]>(this.apiURL2 + '/medico/all')
  //     .pipe(retry(1), catchError(this.handleError));
  // }

  // getMedico(medicoId: number): Observable<Medico[]> {
  //   return this.http
  //     .get<Medico[]>(this.apiURL2 + '/medico/get?medicoId=' + medicoId)
  //     .pipe(retry(1), catchError(this.handleError));
  // }

  async getUserCalendarioCard(userId: number): Promise<CardMedico[]> {
    let medicos: Medico[] = [];
    let calendarioUser: Calendario[] = [];
    await firstValueFrom(this.getCalendarioUser(userId)).then(
      (calend) => (calendarioUser = calend)
    );
    await firstValueFrom(this.getAllMedicos()).then(
      (listaMedicos) => (medicos = listaMedicos)
    );
    const cardsMedicos: CardMedico[] = [];
    calendarioUser.forEach((calendario) => {
      const medico = medicos.filter((med) => med.id === calendario.medicoId)[0];
      const novoCard: CardMedico = {
        calendarioId: calendario.id,
        medicoId: medico.id,
        sexo: medico.sexo,
        nome: medico.nome,
        especialidade: medico.especialidade,
        photoUrl: medico.photoUrl,
        data: calendario.data,
        tipo: cardMedico.calendario,
      };
      cardsMedicos.push(novoCard);
    });
    return cardsMedicos;
  }

  async getProximasConsultasUser(userId: number): Promise<CardMedico[]> {
    let calendarioUser: CardMedico[] = [];
    await this.getUserCalendarioCard(userId).then(
      (calend) => (calendarioUser = calend)
    );
    const agora = new Date();
    return calendarioUser.filter((calendario) => {
      if (calendario.data) {
        const dataDoCalendartio = new Date(calendario.data.toString());
        return dataDoCalendartio > agora;
      }
      return false;
    });
  }

  async getConsultasPassadasUser(userId: number): Promise<CardMedico[]> {
    let calendarioUser: CardMedico[] = [];
    await this.getUserCalendarioCard(userId).then(
      (calend) => (calendarioUser = calend)
    );
    const agora = new Date();
    return calendarioUser.filter((calendario) => {
      if (calendario.data) {
        const dataDoCalendartio = new Date(calendario.data.toString());
        return dataDoCalendartio < agora;
      }
      return false;
    });
  }

  getCalendario(calendarioId: number): Observable<Calendario[]> {
    return this.http
      .get<Calendario[]>(this.apiURL2 + '/calendario/get?id=' + calendarioId)
      .pipe(retry(1), catchError(this.handleError));
  }

  getCalendariosMedico(medicoId: number): Observable<Calendario[]> {
    return this.http
      .get<Calendario[]>(
        this.apiURL2 + '/calendario/getMedico?medicoId=' + medicoId
      )
      .pipe(retry(1), catchError(this.handleError));
  }

  deleteCalendario(id: number): Observable<any> {
    return this.http
      .delete<any>(this.apiURL2 + '/calendario/delete?id=' + id)
      .pipe(retry(1), catchError(this.handleError));
  }

  criarCalendario(calendario: Calendario): Observable<any> {
    const body = JSON.stringify(calendario);
    return this.http.post(this.apiURL2 + '/calendario/create', body);
  }

  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    // window.alert(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }
}
