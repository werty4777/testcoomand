import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {Router} from '@angular/router';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn:'root'
})
export class RequestInterceptor implements HttpInterceptor {


  constructor(private router: Router) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {


    console.log(req.url);
    if(req.url.endsWith('/register') || req.url.endsWith('/login') || req.url.includes("produtos") || req.url.includes("https://api.apis.net.pe/v1/tipo-cambio-sunat")){
      console.log("aca ss");
      return next.handle(req);
    }

    const token = localStorage.getItem('token');


    if (!token) {
      console.log("Aca");

    }
    // @ts-ignore
    const headers = req.clone({
       // @ts-ignore
      headers: req.headers.set('Authorization', token)
    });

    return next.handle(headers);


  }


}
