import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IPagina } from '../pagina/pagina';
import { DiaCalendario, IDiaCalendario } from './dia-calendario';
import { Cronograma } from '../cronograma/cronograma';
import { configuracao } from 'src/app/configuracao';

@Injectable()
export class DiaCalendarioService {
    url = 'http://localhost:8080' + '/diaCalendario';
    httpHeader = new HttpHeaders();
    constructor(
        private httpCliente: HttpClient) {
        this.httpHeader = this.httpHeader.append('Content-Type', 'application/json');
    }

    public lista(mes: number, ano: number, listaCronograma: Cronograma[]): Observable<DiaCalendario[]> {

        let httpParams = new HttpParams();

        if (mes) {
            httpParams = httpParams.append('mes', mes.toString());
        }

        if (ano) {
            httpParams = httpParams.append('ano', ano.toString());
        }

        const listaIdCronograma = new Array<string>();
        if (listaCronograma) {
            for (const cronograma of listaCronograma) {
                listaIdCronograma.push(cronograma.id.toString());
            }
        }
        for (const idCronograma of listaIdCronograma) {
            httpParams = httpParams.append(configuracao.parametroListaIdCronograma, idCronograma);
        }

        // tslint:disable-next-line: max-line-length
        return this.httpCliente.get<IDiaCalendario[]>(this.url + '/lista', { params: httpParams }).pipe(map((lista => DiaCalendario.listaDoBackend(lista))));

    }

    private obtemPagina(pagina: IPagina<IDiaCalendario, DiaCalendario>): IPagina<IDiaCalendario, DiaCalendario> {
        pagina.conteudo = DiaCalendario.listaDoBackend(pagina.content);
        return pagina;
    }
}