import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { configuracao } from 'src/app/configuracao';
import { MateriaCronograma } from './materia-cronograma';
import { TopicoMateriaCronograma } from './topico-materia-cronograma';

@Injectable({ providedIn: 'root' })
export class TopicoMateriaCronogramaService {
    url = 'http://localhost:8080' + '/topicoMateriaCronograma';
    httpHeader = new HttpHeaders();

    constructor(
        private httpClient: HttpClient
    ) {
        this.httpHeader = this.httpHeader.append('Content-Type', 'application/json');
    }

    public obtem(id: string): Observable<TopicoMateriaCronograma> {

        let httpParams = new HttpParams();

        if (id) {
            httpParams = httpParams.append(configuracao.parametroId, id);
        }

        return this.httpClient.get<TopicoMateriaCronograma>(this.url + '/obtem', { params: httpParams })
            .pipe(map((objRetornado => TopicoMateriaCronograma.doBackend(objRetornado))));
    }

    public cria(objeto: TopicoMateriaCronograma): Observable<TopicoMateriaCronograma> {
        return this.httpClient.post<TopicoMateriaCronograma>(this.url + '/cria', objeto.paraBackend(), { headers: this.httpHeader })
            .pipe(map(objCriado => TopicoMateriaCronograma.doBackend(objCriado) as TopicoMateriaCronograma)
            );

    }

    public atualiza(objeto: TopicoMateriaCronograma): Observable<TopicoMateriaCronograma> {
        return this.httpClient.put<TopicoMateriaCronograma>(this.url + '/atualiza', objeto.paraBackend(), { headers: this.httpHeader })
            .pipe(map(objCriado => TopicoMateriaCronograma.doBackend(objCriado) as TopicoMateriaCronograma)
            );

    }
}