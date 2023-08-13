import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, retry, switchMap } from 'rxjs';
import { User } from '../model/interfaces/user.interface';
import { apiConstants } from './default.service';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(private http: HttpClient, private router: Router) {}

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

  updateUser(user: User): Observable<User[]> {
    return this.http
      .put<User[]>(apiConstants.apiUrl + '/user/update', JSON.stringify(user))
      .pipe(map((user) => user || []));
  }

  checkSession(): number | undefined {
    const userId = sessionStorage.getItem('userId');
    if (userId) {
      return +userId;
    } else {
      this.router.navigate(['/welcome']);
      return undefined;
    }
  }

  // uploadImage(file: File, userId: number): Observable<any> {
  //   const apiUpload = 'https://freeimage.host/api/1/upload';
  //   const formData = new FormData();
  //   formData.append('source', file);
  //   const body = {
  //     key: apiConstants.key,
  //     action: 'upload',
  //     source: formData.get('source'),
  //     format: 'json'
  //   };
  //   const headers = {
  //     'Content-Type': 'multipart/form-data'
  //   };
  //   return this.http.post(apiUpload, body, { headers }).pipe(
  //     map((response: any) => {
  //       const imageUrl = response.links[0].direct_link;
  //       const user = { id: userId, imageUrl };
  //       debugger;
  //       return user;
  //     }),

  //     // switchMap((user) => this.updateUser({ id: user.id, photoUrl: user.imageUrl })),
  //     // map(() => of(user))
  //   );
}
