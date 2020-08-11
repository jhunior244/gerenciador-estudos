import { IMateria, Materia } from '../materia/materia';
import { ITopicoMateriaCronograma, TopicoMateriaCronograma } from './topico-materia-cronograma';

export class IMateriaCronograma {
    id: number;
    nome: string;
    listaTopicoMateriaCronograma: ITopicoMateriaCronograma[];
    materia: IMateria;
}

export class MateriaCronograma {
    id: number;
    nome: string;
    listaTopicoMateriaCronograma: TopicoMateriaCronograma[];
    materia: Materia;

    static listaDoBackend(response: IMateriaCronograma[]): MateriaCronograma[] {
        const lista: MateriaCronograma[] = [];

        for (const objJSON of response) {
            lista.push(this.doBackend(objJSON));
        }

        return lista;
    }

    static listaParaBackend(listaFrontend: MateriaCronograma[]): IMateriaCronograma[] {
        const lista: IMateriaCronograma[] = [];

        for (const obj of listaFrontend) {
            lista.push(obj.paraBackend());
        }

        return lista;
    }

    static doBackend(response: IMateriaCronograma): MateriaCronograma {
        let obj = Object.create(MateriaCronograma.prototype);

        if (response == null) {
            return null;
        }

        obj = Object.assign(obj, response, {
            listaTopicoMateriaCronograma: (response.listaTopicoMateriaCronograma) ?
                TopicoMateriaCronograma.listaDoBackend(response.listaTopicoMateriaCronograma) : null,
                materia: (response.materia) ? Materia.doBackend(response.materia) : null,
        });
        return obj;
    }

    paraBackend(): IMateriaCronograma {
        const obj = Object.assign(Object.create(MateriaCronograma.prototype), this, {
            listaTopicoMateriaCronograma: (this.listaTopicoMateriaCronograma) ?
                TopicoMateriaCronograma.listaParaBackend(this.listaTopicoMateriaCronograma) : null,
                materia: (this.materia) ? this.materia.paraBackend() : null
        });

        return obj;
    }
}