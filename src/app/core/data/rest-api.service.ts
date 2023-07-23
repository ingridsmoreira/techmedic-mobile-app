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
