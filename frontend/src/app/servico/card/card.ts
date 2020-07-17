import * as moment from 'moment';
import { Evento, IEvento } from '../evento/evento';

export class ICard {
    id: number;
    textoFrente: string;
    textoTras: string;
    dataUltimaRevisao: moment.Moment;
    dataProximaRevisao: moment.Moment;
    evento: IEvento;
}

export class Card {
    id: number;
    textoFrente: string;
    textoTras: string;
    dataUltimaRevisao: moment.Moment;
    dataProximaRevisao: moment.Moment;
    evento: Evento;

    static listaDoBackend(response: ICard[]): Card[] {
        const lista: Card[] = [];

        for (const objJSON of response) {
            lista.push(this.doBackend(objJSON));
        }

        return lista;
    }

    static listaParaBackend(listaFrontend: Card[]): ICard[] {
        const lista: ICard[] = [];

        for (const obj of listaFrontend) {
            lista.push(obj.paraBackend());
        }

        return lista;
    }

    static doBackend(response: ICard): Card {
        let obj = Object.create(Card.prototype);

        if (response == null) {
            return null;
        }

        obj = Object.assign(obj, response, {
            dataUltimaRevisao: (response.dataUltimaRevisao) ? moment(response.dataUltimaRevisao) : null,
            dataProximaRevisao: (response.dataProximaRevisao) ? moment(response.dataProximaRevisao) : null,
            evento: (response.evento) ? Evento.doBackend(response.evento) : null
        });
        return obj;
    }

    paraBackend(): ICard {
        const obj = Object.assign(Object.create(Card.prototype), this, {
            evento: (this.evento) ? this.evento.paraBackend() : null,
            dataProximaRevisao: (this.dataProximaRevisao) ? moment(this.dataProximaRevisao).toDate().toISOString() : null,
            dataUltimaRevisao: (this.dataUltimaRevisao) ? moment(this.dataUltimaRevisao).toDate().toISOString() : null,
        });

        return obj;
    }
}