import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, retry } from 'rxjs';
import { User } from '../model/interfaces/user.interface';
import { apiConstants } from './default.service';

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(private http: HttpClient) {}

  getUser(userId: number): Observable<Array<User>> {
    return this.http
      .get<User[]>(apiConstants.apiUrl + '/user/get?id=' + userId)
      .pipe(map((user) => user || []));
  }

  loginUser(login: User): Observable<User[]> {
    return this.http
      .post<User[]>(apiConstants.apiUrl + '/user/login', JSON.stringify(login))
      .pipe(map((user) => user || []));
  }

  createUser(user: User): Observable<User[]> {
    return this.http
      .post<User[]>(apiConstants.apiUrl + '/user/create', JSON.stringify(user))
      .pipe(map((user) => user || []));
  }

  updateUser(user: User): Observable<User> {
    return this.http
      .put<User>(
        apiConstants.apiUrl + '/user/update',
        JSON.stringify(user),
        apiConstants.httpOptions
      )
      .pipe(map((user) => user || null));
  }
}
