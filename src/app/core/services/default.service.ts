import { HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';

export const apiConstants = {
  apiUrl: 'http://localhost:3000',
  httpOptions: {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': 'true',
      'Access-Control-Allow-Headers': '*',
      'Access-Control-Allow-Methods': '*',
      key: 'x-api-key',
    }),
  },
};

export function handleError(error: any): any {
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