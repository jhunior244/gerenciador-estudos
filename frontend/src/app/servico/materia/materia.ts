import * as moment from 'moment';
import { ITipoEvento, TipoEvento } from '../tipo-evento/tipo-evento';
import { Cronograma, ICronograma } from '../cronograma/cronograma';

export class IMateria {
    id: number;
    nome: string;
    listaCronograma: ICronograma[];
}

export class Materia {
    id: number;
    nome: string;
    listaCronograma: Cronograma[];

    static listaDoBackend(response: IMateria[]): Materia[] {
        const lista: Materia[] = [];

        for (const objJSON of response) {
            lista.push(this.doBackend(objJSON));
        }

        return lista;
    }

    static listaParaBackend(listaFrontend: Materia[]): IMateria[] {
        const lista: IMateria[] = [];

        for (const obj of listaFrontend) {
            lista.push(obj.paraBackend());
        }

        return lista;
    }

    static doBackend(response: IMateria): Materia {
        let obj = Object.create(Materia.prototype);

        if (response == null) {
            return null;
        }

        obj = Object.assign(obj, response, {
            listaCronograma: (response.listaCronograma) ? Cronograma.listaDoBackend(response.listaCronograma) : null,
        });
        return obj;
    }

    paraBackend(): IMateria {
        const obj = Object.assign(Object.create(Materia.prototype), this, {
            listaCronograma: (this.listaCronograma) ? Cronograma.listaParaBackend(this.listaCronograma) : null,
        });

        return obj;
    }
}