import { HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';

export const apiConstants = {
  apiUrl: 'https://recipecrafters.com/index.php',
  // apiUrl: 'http://localhost:3000/index.php',
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
  key: '6d207e02198a847aa98d0a2a901485a5',
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
