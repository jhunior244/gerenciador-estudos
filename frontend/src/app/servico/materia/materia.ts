import { ITopico, Topico } from '../topico/topico';

export class IMateria {
    id: number;
    nome: string;
    listaTopico: ITopico[];
}

export class Materia {
    id: number;
    nome: string;
    listaTopico: Topico[];

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
            listaTopico: (response.listaTopico) ? Topico.listaDoBackend(response.listaTopico) : null,
        });
        return obj;
    }

    paraBackend(): IMateria {
        const obj = Object.assign(Object.create(Materia.prototype), this, {
            listaTopico: (this.listaTopico) ? Topico.listaParaBackend(this.listaTopico) : null,
        });

        return obj;
    }
}