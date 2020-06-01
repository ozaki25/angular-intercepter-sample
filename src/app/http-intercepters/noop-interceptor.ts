import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpResponse,
  HttpErrorResponse,
} from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable()
export class NoopInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler,
  ): Observable<HttpEvent<any>> {
    console.log('################');
    console.log(req.url);
    return next.handle(req).pipe(
      tap((res: HttpResponse<{}>) => {
        console.log('$$$$$$$$$$$$$$$$');
        console.log(res.body);
      }),
      catchError((res: HttpErrorResponse) => {
        console.log(res);
        if (res.headers.get('content-type').startsWith('text/html')) {
          console.log(res.error.text);
          document.body.innerHTML = res.error.text;
        }
        return of(null);
      }),
    );
  }
}
