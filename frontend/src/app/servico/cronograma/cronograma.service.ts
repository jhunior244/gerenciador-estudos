import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { configuracao } from 'src/app/configuracao';
import { Evento } from '../evento/evento';
import { map } from 'rxjs/operators';
import { Cronograma, ICronograma } from './cronograma';

@Injectable({ providedIn: 'root' })
export class CronogramaService {
    url = 'http://localhost:8080' + '/cronograma';
    httpHeader = new HttpHeaders();

    constructor(
        private httpClient: HttpClient
    ) {
        this.httpHeader = this.httpHeader.append('Content-Type', 'application/json');
    }

    public obtem(id: string): Observable<Cronograma> {

        let httpParams = new HttpParams();

        if (id) {
            httpParams = httpParams.append(configuracao.parametroId, id);
        }

        return this.httpClient.get<Cronograma>(this.url + '/obtem', { params: httpParams })
            .pipe(map((objRetornado => Cronograma.doBackend(objRetornado))));
    }

    public cria(objeto: Cronograma): Observable<Cronograma> {
        return this.httpClient.post<Cronograma>(this.url + '/cria', objeto.paraBackend(), { headers: this.httpHeader })
            .pipe(map(objCriado => Cronograma.doBackend(objCriado) as Cronograma)
            );

    }

    public atualiza(objeto: Cronograma): Observable<Cronograma> {
        return this.httpClient.put<Cronograma>(this.url + '/atualiza', objeto.paraBackend(), { headers: this.httpHeader })
            .pipe(map(objCriado => Cronograma.doBackend(objCriado) as Cronograma)
            );

    }

    public lista(): Observable<Cronograma[]> {
        return this.httpClient.get<ICronograma[]>(this.url + '/lista',).pipe(map((lista => Cronograma.listaDoBackend(lista))));

    }
}

