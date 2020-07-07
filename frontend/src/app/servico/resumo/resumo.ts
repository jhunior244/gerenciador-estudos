import * as moment from 'moment';
import { ITipoEvento, TipoEvento } from '../tipo-evento/tipo-evento';
import { Evento, IEvento } from '../evento/evento';

export class IResumo {
    id: number;
    titulo: string;
    conteudo: string;
    dataCriacao: moment.Moment;
    dataUltimaAtualizacao: moment.Moment;
    evento: IEvento;
}

export class Resumo {
    id: number;
    titulo: string;
    conteudo: string;
    dataCriacao: moment.Moment;
    dataUltimaAtualizacao: moment.Moment;
    evento: Evento;

    static listaDoBackend(response: IResumo[]): Resumo[] {
        const lista: Resumo[] = [];

        for (const objJSON of response) {
            lista.push(this.doBackend(objJSON));
        }

        return lista;
    }

    static listaParaBackend(listaFrontend: Resumo[]): IResumo[] {
        const lista: IResumo[] = [];

        for (const obj of listaFrontend) {
            lista.push(obj.paraBackend());
        }

        return lista;
    }

    static doBackend(response: IResumo): Resumo {
        let obj = Object.create(Resumo.prototype);

        if (response == null) {
            return null;
        }

        obj = Object.assign(obj, response, {
            dataCriacao: (response.dataCriacao) ? moment(response.dataCriacao) : null,
            dataUltimaAtualizacao: (response.dataUltimaAtualizacao) ? moment(response.dataUltimaAtualizacao) : null,
            evento: (response.evento) ? Evento.doBackend(response.evento) : null
        });
        return obj;
    }

    paraBackend(): IResumo {
        const obj = Object.assign(Object.create(Resumo.prototype), this, {
            evento: (this.evento) ? this.evento.paraBackend() : null,
            dataCriacao: (this.dataCriacao) ? moment(this.dataCriacao).toDate().toISOString() : null,
            dataUltimaAtualizacao: (this.dataUltimaAtualizacao) ? moment(this.dataUltimaAtualizacao).toDate().toISOString() : null,
        });

        return obj;
    }
}