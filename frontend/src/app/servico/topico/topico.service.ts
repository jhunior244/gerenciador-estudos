import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { configuracao } from 'src/app/configuracao';
import { Topico, ITopico } from './topico';

@Injectable({ providedIn: 'root' })
export class TopicoService {
    url = 'http://localhost:8080' + '/topico';
    httpHeader = new HttpHeaders();

    constructor(
        private httpCliente: HttpClient
    ) {
        this.httpHeader = this.httpHeader.append('Content-Type', 'application/json');
    }

    public cria(objeto: Topico): Observable<Topico> {
        return this.httpCliente.post<Topico>(this.url + '/cria', objeto.paraBackend(), { headers: this.httpHeader })
            .pipe(map(TopicoCriado => Topico.doBackend(TopicoCriado) as Topico)
            );

    }

    public atualiza(objeto: Topico): Observable<Topico> {
        return this.httpCliente.put<Topico>(this.url + '/atualiza', objeto.paraBackend(), { headers: this.httpHeader })
            .pipe(map(TopicoCriado => Topico.doBackend(TopicoCriado) as Topico)
            );

    }

    public obtem(id: string): Observable<Topico> {

        let httpParams = new HttpParams();

        if (id) {
            httpParams = httpParams.append(configuracao.parametroId, id);
        }

        return this.httpCliente.get<Topico>(this.url + '/obtem', { params: httpParams })
            .pipe(map((objRetornado => Topico.doBackend(objRetornado))));
    }

    public lista(idMateria: number): Observable<Topico[]> {

        let httpParams = new HttpParams();
        
        if (idMateria) {
            httpParams = httpParams.append(configuracao.parametroId, idMateria.toString());
        }

        // tslint:disable-next-line: max-line-length
        return this.httpCliente.get<ITopico[]>(this.url + '/lista', {params: httpParams}).pipe(map((lista => Topico.listaDoBackend(lista))));

    }
}

