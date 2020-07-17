import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { configuracao } from 'src/app/configuracao';
import { Evento } from './evento';

@Injectable({ providedIn: 'root' })
export class EventoService {
    url = 'http://localhost:8080' + '/evento';
    httpHeader = new HttpHeaders();

    constructor(
        private httpCliente: HttpClient
    ) {
        this.httpHeader = this.httpHeader.append('Content-Type', 'application/json');
    }

    public cria(evento: Evento): Observable<Evento> {
        return this.httpCliente.post<Evento>(this.url + '/cria', evento.paraBackend(), { headers: this.httpHeader })
            .pipe(map(eventoCriado => Evento.doBackend(eventoCriado) as Evento)
            );

    }

    public atualiza(evento: Evento): Observable<Evento> {
        return this.httpCliente.put<Evento>(this.url + '/atualiza', evento.paraBackend(), { headers: this.httpHeader })
            .pipe(map(eventoCriado => Evento.doBackend(eventoCriado) as Evento)
            );

    }

    public obtem(id: string): Observable<Evento> {

        let httpParams = new HttpParams();

        if (id) {
            httpParams = httpParams.append(configuracao.parametroId, id);
        }

        return this.httpCliente.get<Evento>(this.url + '/obtem', { params: httpParams })
            .pipe(map((objRetornado => Evento.doBackend(objRetornado))));
    }
}

