import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { configuracao } from 'src/app/configuracao';
import { Card, ICard } from './card';

@Injectable({ providedIn: 'root' })
export class CardService {
    url = 'http://localhost:8080' + '/card';
    httpHeader = new HttpHeaders();

    constructor(
        private httpCliente: HttpClient
    ) {
        this.httpHeader = this.httpHeader.append('Content-Type', 'application/json');
    }

    public cria(obj: Card): Observable<Card> {
        return this.httpCliente.post<Card>(this.url + '/cria', obj.paraBackend(), { headers: this.httpHeader })
            .pipe(map(objCriado => Card.doBackend(objCriado) as Card)
            );

    }

    public atualiza(obj: Card): Observable<Card> {
        return this.httpCliente.put<Card>(this.url + '/atualiza', obj.paraBackend(), { headers: this.httpHeader })
            .pipe(map(objRetornado => Card.doBackend(objRetornado) as Card)
            );

    }

    public obtem(id: string): Observable<Card> {

        let httpParams = new HttpParams();

        if (id) {
            httpParams = httpParams.append(configuracao.parametroId, id);
        }

        return this.httpCliente.get<Card>(this.url + '/obtem', { params: httpParams })
            .pipe(map((objRetornado => Card.doBackend(objRetornado))));
    }

    public lista(idEvento: string): Observable<Card[]> {
        let httpParams = new HttpParams();

        if (idEvento) {
            httpParams = httpParams.append(configuracao.parametroId, idEvento);
        }
        return this.httpCliente.get<ICard[]>(this.url + '/lista',
            { params: httpParams }).pipe(map((lista => Card.listaDoBackend(lista))));

    }
}

