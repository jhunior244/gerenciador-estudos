import * as moment from 'moment';
import { ITipoEvento, TipoEvento } from '../tipo-evento/tipo-evento';
import { IMateria, Materia } from '../materia/materia';
import { IMateriaCronograma, MateriaCronograma } from './materia-cronograma';

export class ICronograma {
    id: number;
    nome: string;
    listaMateriaCronograma: IMateriaCronograma[];
}

export class Cronograma {
    id: number;
    nome: string;
    listaMateriaCronograma: MateriaCronograma[];

    static listaDoBackend(response: ICronograma[]): Cronograma[] {
        const lista: Cronograma[] = [];

        for (const objJSON of response) {
            lista.push(this.doBackend(objJSON));
        }

        return lista;
    }

    static listaParaBackend(listaFrontend: Cronograma[]): ICronograma[] {
        const lista: ICronograma[] = [];

        for (const obj of listaFrontend) {
            lista.push(obj.paraBackend());
        }

        return lista;
    }

    static doBackend(response: ICronograma): Cronograma {
        let obj = Object.create(Cronograma.prototype);

        if (response == null) {
            return null;
        }

        obj = Object.assign(obj, response, {
            listaMateriaCronograma: (response.listaMateriaCronograma) ?
                MateriaCronograma.listaDoBackend(response.listaMateriaCronograma) : null,
        });
        return obj;
    }

    paraBackend(): ICronograma {
        const obj = Object.assign(Object.create(Cronograma.prototype), this, {
            listaMateriaCronograma: (this.listaMateriaCronograma) ?
                MateriaCronograma.listaParaBackend(this.listaMateriaCronograma) : null,
        });

        return obj;
    }
}

