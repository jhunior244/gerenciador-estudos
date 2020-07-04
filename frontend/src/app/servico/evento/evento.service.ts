import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
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
}

