import { IMateria, Materia } from '../materia/materia';
import { ITopico, Topico } from '../topico/topico';

export class ITopicoMateriaCronograma {
    id: number;
    horasEstimadasEstudo: number;
    questoesEstimadasEstudo: number;
    topico: ITopico;
}

export class TopicoMateriaCronograma {
    id: number;
    horasEstimadasEstudo: number;
    questoesEstimadasEstudo: number;
    topico: Topico;

    static listaDoBackend(response: ITopicoMateriaCronograma[]): TopicoMateriaCronograma[] {
        const lista: TopicoMateriaCronograma[] = [];

        for (const objJSON of response) {
            lista.push(this.doBackend(objJSON));
        }

        return lista;
    }

    static listaParaBackend(listaFrontend: TopicoMateriaCronograma[]): ITopicoMateriaCronograma[] {
        const lista: ITopicoMateriaCronograma[] = [];

        for (const obj of listaFrontend) {
            lista.push(obj.paraBackend());
        }

        return lista;
    }

    static doBackend(response: ITopicoMateriaCronograma): TopicoMateriaCronograma {
        let obj = Object.create(TopicoMateriaCronograma.prototype);
        if (response == null) {
            return null;
        }

        obj = Object.assign(obj, response, {
            topico: (response.topico) ? Topico.doBackend(response.topico) : null,
        });
        return obj;
    }

    paraBackend(): ITopicoMateriaCronograma {
        const obj = Object.assign(Object.create(TopicoMateriaCronograma.prototype), this, {
            topico: (this.topico) ? this.topico.paraBackend() : null
        });

        return obj;
    }
}