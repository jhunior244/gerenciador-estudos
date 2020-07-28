import * as moment from 'moment';
import { ITipoEvento, TipoEvento } from '../tipo-evento/tipo-evento';
import { IMateria, Materia } from '../materia/materia';

export class ITopico {
    id: number;
    nome: string;
    listaMateria: IMateria[];
}

export class Topico {
    id: number;
    nome: string;
    listaMateria: Materia[];

    static listaDoBackend(response: ITopico[]): Topico[] {
        const lista: Topico[] = [];

        for (const objJSON of response) {
            lista.push(this.doBackend(objJSON));
        }

        return lista;
    }

    static listaParaBackend(listaFrontend: Topico[]): ITopico[] {
        const lista: ITopico[] = [];

        for (const obj of listaFrontend) {
            lista.push(obj.paraBackend());
        }

        return lista;
    }

    static doBackend(response: ITopico): Topico {
        let obj = Object.create(Topico.prototype);

        if (response == null) {
            return null;
        }

        obj = Object.assign(obj, response, {
            listaMateria: (response.listaMateria) ? Materia.listaDoBackend(response.listaMateria) : null,
        });
        return obj;
    }

    paraBackend(): ITopico {
        const obj = Object.assign(Object.create(Topico.prototype), this, {
            listaMateria: (this.listaMateria) ? Materia.listaParaBackend(this.listaMateria) : null,
        });

        return obj;
    }
}