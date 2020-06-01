import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';

import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

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
    );
  }
}
