import * as moment from 'moment';
import { ITipoEvento, TipoEvento } from '../tipo-evento/tipo-evento';
import { IMateria, Materia } from '../materia/materia';

export class ICronograma {
    id: number;
    nome: string;
    listaMateria: IMateria[];
}

export class Cronograma {
    id: number;
    nome: string;
    listaMateria: Materia[];

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
            listaMateria: (response.listaMateria) ? Materia.listaDoBackend(response.listaMateria) : null,
        });
        return obj;
    }

    paraBackend(): ICronograma {
        const obj = Object.assign(Object.create(Cronograma.prototype), this, {
            listaMateria: (this.listaMateria) ? Materia.listaParaBackend(this.listaMateria) : null,
        });

        return obj;
    }
}