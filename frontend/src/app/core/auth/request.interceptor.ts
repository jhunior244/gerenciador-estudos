import {
    HttpErrorResponse, HttpEvent, HttpHandler,
    HttpHeaderResponse, HttpInterceptor, HttpProgressEvent,
    HttpRequest, HttpResponse, HttpSentEvent, HttpUserEvent
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError  } from 'rxjs';
import { TokenService } from '../token/token.service';
import { catchError } from 'rxjs/operators';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

    constructor(private tokenService: TokenService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpSentEvent
        | HttpHeaderResponse | HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any>> {

        if (this.tokenService.hasToken()) {
            const token = this.tokenService.getToken();
            req = req.clone({
                setHeaders: {
                    Authorization: token
                }
            });
        }
        return next.handle(req);
    }
}

@Injectable()
export class ErroInterceptor implements HttpInterceptor {

    constructor(private router: Router) {
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(catchError((err: HttpErrorResponse) => {
            //   if (err.error instanceof Error) {
            //     console.log('GSUP Erro Cliente', err.error.message);
            //   } else {

            //     if (err.status === 401) {
            //       this._router.navigate([configuracao.rotaLogin]);
            //     }
            //   }

            //   if (err.status === 400) {
            //     this._sessaoHiveService.exibeMensagemErro(err.error.erro);
            //   } else if (err.status === 500) {
            //     this._sessaoHiveService.exibeMensagemErro('OcorreuErroInesperado');
            //   } else {
            //     this._sessaoHiveService.exibeMensagemErro(err.error);
            //   }

            return throwError(err);
        }));
    }
}

