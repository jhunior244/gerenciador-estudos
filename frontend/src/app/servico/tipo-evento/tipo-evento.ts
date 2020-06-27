import * as moment from 'moment';

export class ITipoEvento {
    id: number;
    nome: string;
}

export class TipoEvento {
    id: number;
    nome: string;

    static listaDoBackend(response: ITipoEvento[]): TipoEvento[] {
        const lista: TipoEvento[] = [];

        for (const objJSON of response) {
            lista.push(this.doBackend(objJSON));
        }

        return lista;
    }

    static doBackend(response: ITipoEvento): TipoEvento {
        let tipoEvento = Object.create(TipoEvento.prototype);

        if (response == null) {
            return null;
        }

        tipoEvento = Object.assign(tipoEvento, response, {
        });
        return tipoEvento;
    }

    paraBackend(): ITipoEvento {
        const tipoEvento = Object.assign(Object.create(TipoEvento.prototype), this, {
        });

        return tipoEvento;
    }
}