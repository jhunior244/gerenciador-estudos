import * as moment from 'moment';
import { Evento, IEvento } from '../evento/evento';

export class IDiaCalendario {
    data: moment.Moment;
    listaEvento: IEvento[];
}

export class DiaCalendario {
    data: moment.Moment;
    listaEvento: Evento[];

    static listaDoBackend(response: IDiaCalendario[]): DiaCalendario[] {
        const lista: DiaCalendario[] = [];

        for (const objJSON of response) {
            lista.push(this.doBackend(objJSON));
        }

        return lista;
    }

    static listaParaBackend(listaFrontend: DiaCalendario[]): IDiaCalendario[] {
        const lista: IDiaCalendario[] = [];

        for (const obj of listaFrontend) {
            lista.push(obj.paraBackend());
        }

        return lista;
    }

    static doBackend(response: IDiaCalendario): DiaCalendario {
        let diaCalendario = Object.create(DiaCalendario.prototype);

        if (response == null) {
            return null;
        }

        diaCalendario = Object.assign(diaCalendario, response, {
            data: (response.data) ? moment(response.data) : null,
            listaEvento: (response.listaEvento) ? Evento.listaDoBackend(response.listaEvento) : null
        });
        return diaCalendario;
    }

    paraBackend(): IDiaCalendario {
        const diaCalendario = Object.assign(Object.create(DiaCalendario.prototype), this, {
            data: (this.data) ? moment(this.data).toDate().toISOString() : null,
            listaEvento: (this.listaEvento) ? Evento.listaParaBackend(this.listaEvento) : null,
        });

        return diaCalendario;
    }
}
