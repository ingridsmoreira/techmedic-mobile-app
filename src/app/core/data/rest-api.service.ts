import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../objetos/model/user.interface';
import { Observable, catchError, retry, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RestApiService {
  md5 = require('md5');
  apiURL = 'http://localhost:3000';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) {}

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
