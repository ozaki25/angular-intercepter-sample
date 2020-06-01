import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getHtml(): Observable<HttpResponse<{}>> {
    return this.http.get('http://localhost:4200/assets/index.html', {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Accept: 'text/html',
      }),
      observe: 'response',
    });
  }

  getJson(): Observable<HttpResponse<{}>> {
    return this.http.get('http://localhost:4200/assets/index.json', {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      observe: 'response',
    });
  }
}
