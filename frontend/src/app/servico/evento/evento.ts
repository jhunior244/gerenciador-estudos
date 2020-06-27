import * as moment from 'moment';
import { ITipoEvento, TipoEvento } from '../tipo-evento/tipo-evento';

export class IEvento {
    id: number;
    nome: string;
    descricao: string;
    data: moment.Moment;
    tipoEvento: ITipoEvento;
}

export class Evento {
    id: number;
    nome: string;
    descricao: string;
    data: moment.Moment;
    tipoEvento: TipoEvento;

    static listaDoBackend(response: IEvento[]): Evento[] {
        const lista: Evento[] = [];

        for (const objJSON of response) {
            lista.push(this.doBackend(objJSON));
        }

        return lista;
    }

    static listaParaBackend(listaFrontend: Evento[]): IEvento[] {
        const lista: IEvento[] = [];

        for (const obj of listaFrontend) {
            lista.push(obj.paraBackend());
        }

        return lista;
    }

    static doBackend(response: IEvento): Evento {
        let evento = Object.create(Evento.prototype);

        if (response == null) {
            return null;
        }

        evento = Object.assign(evento, response, {
            data: (response.data) ? moment(response.data) : null,
            tipoEvento: (response.tipoEvento) ? TipoEvento.doBackend(response.tipoEvento) : null
        });
        return evento;
    }

    paraBackend(): IEvento {
        const evento = Object.assign(Object.create(Evento.prototype), this, {
            data: (this.data) ? moment(this.data).toDate().toISOString() : null,
            tipoEvento: (this.tipoEvento) ? this.tipoEvento.paraBackend() : null
        });

        return evento;
    }
}