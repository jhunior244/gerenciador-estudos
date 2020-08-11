import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { configuracao } from 'src/app/configuracao';
import { Materia, IMateria } from './materia';

@Injectable({ providedIn: 'root' })
export class MateriaService {
    url = 'http://localhost:8080' + '/materia';
    httpHeader = new HttpHeaders();

    constructor(
        private httpCliente: HttpClient
    ) {
        this.httpHeader = this.httpHeader.append('Content-Type', 'application/json');
    }

    public cria(objeto: Materia): Observable<Materia> {
        return this.httpCliente.post<Materia>(this.url + '/cria', objeto.paraBackend(), { headers: this.httpHeader })
            .pipe(map(MateriaCriado => Materia.doBackend(MateriaCriado) as Materia)
            );

    }

    public atualiza(objeto: Materia): Observable<Materia> {
        return this.httpCliente.put<Materia>(this.url + '/atualiza', objeto.paraBackend(), { headers: this.httpHeader })
            .pipe(map(MateriaCriado => Materia.doBackend(MateriaCriado) as Materia)
            );

    }

    public obtem(id: string): Observable<Materia> {

        let httpParams = new HttpParams();

        if (id) {
            httpParams = httpParams.append(configuracao.parametroId, id);
        }

        return this.httpCliente.get<Materia>(this.url + '/obtem', { params: httpParams })
            .pipe(map((objRetornado => Materia.doBackend(objRetornado))));
    }

    public lista(): Observable<Materia[]> {

        const httpParams = new HttpParams();

        // tslint:disable-next-line: max-line-length
        return this.httpCliente.get<IMateria[]>(this.url + '/lista').pipe(map((lista => Materia.listaDoBackend(lista))));

    }
}

