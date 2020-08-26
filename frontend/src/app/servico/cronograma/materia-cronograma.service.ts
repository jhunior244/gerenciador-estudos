import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { configuracao } from 'src/app/configuracao';
import { MateriaCronograma } from './materia-cronograma';

@Injectable({ providedIn: 'root' })
export class MateriaCronogramaService {
    url = 'http://localhost:8080' + '/materiaCronograma';
    httpHeader = new HttpHeaders();

    constructor(
        private httpClient: HttpClient
    ) {
        this.httpHeader = this.httpHeader.append('Content-Type', 'application/json');
    }

    public obtem(id: string): Observable<MateriaCronograma> {

        let httpParams = new HttpParams();

        if (id) {
            httpParams = httpParams.append(configuracao.parametroId, id);
        }

        return this.httpClient.get<MateriaCronograma>(this.url + '/obtem', { params: httpParams })
            .pipe(map((objRetornado => MateriaCronograma.doBackend(objRetornado))));
    }

    public cria(objeto: MateriaCronograma): Observable<MateriaCronograma> {
        return this.httpClient.post<MateriaCronograma>(this.url + '/cria', objeto.paraBackend(), { headers: this.httpHeader })
            .pipe(map(objCriado => MateriaCronograma.doBackend(objCriado) as MateriaCronograma)
            );

    }

    public atualiza(objeto: MateriaCronograma): Observable<MateriaCronograma> {
        return this.httpClient.put<MateriaCronograma>(this.url + '/atualiza', objeto.paraBackend(), { headers: this.httpHeader })
            .pipe(map(objCriado => MateriaCronograma.doBackend(objCriado) as MateriaCronograma)
            );

    }    
    
    public apaga(id: string) {

        let httpParams = new HttpParams();

        if (id) {
            httpParams = httpParams.append(configuracao.parametroId, id);
        }

        return this.httpClient.delete<void>(this.url + '/apaga', { params: httpParams });
    }
}

