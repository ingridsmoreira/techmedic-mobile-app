import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/interfaces/user.interface';
import { Observable, catchError, retry, throwError } from 'rxjs';
import { CardMedico, Medico } from '../model/interfaces/medico.interface';
import { cardMedico } from '../model/enum/cardMedico';
import { Calendario } from '../model/interfaces/calendario.interface';
import { Notificacoes } from '../model/interfaces/notificacoes.interface';

@Injectable({
  providedIn: 'root',
})
export class RestApiService {
  md5 = require('md5');
  apiURL = 'http://localhost:8000/api';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) {}

  //user

  getUser(userId: string): Observable<User> {
    return this.http
      .get<User>(this.apiURL + '/user/' + userId)
      .pipe(retry(1), catchError(this.handleError));
  }

  loginUser(login: User): Observable<User> {
    login.senha = login?.senha ? this.md5(login?.senha) : '';
    return this.http
      .post<any>(
        this.apiURL + '/user/login',
        JSON.stringify(login),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.handleError));
  }

  createUser(user: User): Observable<User> {
    if (user.senha) {
      user.senha = this.md5(user?.senha);
    } else {
      delete user.senha;
    }
    return this.http
      .post<any>(
        this.apiURL + '/user/create',
        JSON.stringify(user),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.handleError));
  }

  getCalendarioUser(userId: string): Observable<Calendario[]> {
    return this.http
      .get<Calendario[]>(this.apiURL + '/calendario/user/' + userId)
      .pipe(retry(1), catchError(this.handleError));
  }

  // Medico
  getMedico(medicoId: number): Observable<Medico> {
    return this.http
      .get<Medico>(this.apiURL + '/medico/' + medicoId)
      .pipe(retry(1), catchError(this.handleError));
  }

  getProximasConsultas(): Observable<CardMedico[]> {
    return this.http
      .get<CardMedico[]>(this.apiURL + '/proximaConsulta')
      .pipe(retry(1), catchError(this.handleError));
  }

  getConsultasPassadas(): Observable<CardMedico[]> {
    return this.http
      .get<CardMedico[]>(this.apiURL + '/consultasPassadas')
      .pipe(retry(1), catchError(this.handleError));
  }

  getCalendariosMedico(medicoId: number): Observable<Calendario[]> {
    return this.http
      .get<Calendario[]>(this.apiURL + '/calendario/medico/' + medicoId)
      .pipe(retry(1), catchError(this.handleError));
  }

  getCalendarios(): Observable<Calendario[]> {
    return this.http
      .get<Calendario[]>(this.apiURL + '/calendarios')
      .pipe(retry(1), catchError(this.handleError));
  }

  getUserNotificacoes(userId: number): Observable<Notificacoes[]> {
    return this.http
      .get<Notificacoes[]>(this.apiURL + '/notificacoes/user/' + userId)
      .pipe(retry(1), catchError(this.handleError));
  }

  getNotificacoes(): Observable<Notificacoes[]> {
    return this.http
      .get<Notificacoes[]>(this.apiURL + '/notificacoes')
      .pipe(retry(1), catchError(this.handleError));
  }

  criarCalendario(calendario: Calendario): Observable<any> {
    const body = JSON.stringify(calendario);
    console.log(body);
    return this.http.post(this.apiURL + '/calendarios', body, this.httpOptions);
  }

  criarNotificacao(notificacao: Notificacoes): Observable<any> {
    const body = JSON.stringify(notificacao);
    console.log(body);
    return this.http.post(
      this.apiURL + '/notificacoes',
      body,
      this.httpOptions
    );
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
    window.alert(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }
}
