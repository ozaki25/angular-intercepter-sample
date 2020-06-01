import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getHtml(): Observable<HttpResponse<{}>> {
    return this.http
      .get('http://localhost:4200/assets/index.html', {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          Accept: 'text/html',
        }),
        observe: 'response',
      })
      .pipe(
        catchError(res => {
          if (res.headers.get('content-type').startsWith('text/html')) {
            alert(res.headers.get('content-type'));
          }
          return of(res);
        }),
      );
  }

  getJson(): Observable<HttpResponse<{}>> {
    return this.http.get('http://localhost:4200/assets/index.json', {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      observe: 'response',
    });
  }
}
