import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Resumo, IResumo } from './resumo';

@Injectable({ providedIn: 'root' })
export class ResumoService {
    url = 'http://localhost:8080' + '/resumo';
    httpHeader = new HttpHeaders();

    constructor(
        private httpCliente: HttpClient
    ) {
        this.httpHeader = this.httpHeader.append('Content-Type', 'application/json');
    }

    public cria(obj: Resumo): Observable<Resumo> {
        return this.httpCliente.post<Resumo>(this.url + '/cria', obj.paraBackend(), { headers: this.httpHeader })
            .pipe(map(objCriado => Resumo.doBackend(objCriado) as Resumo)
            );

    }

    public lista(): Observable<Resumo[]> {

        const httpParams = new HttpParams();

        // tslint:disable-next-line: max-line-length
        return this.httpCliente.get<IResumo[]>(this.url + '/lista', { params: httpParams }).pipe(map((lista => Resumo.listaDoBackend(lista))));

    }
}

