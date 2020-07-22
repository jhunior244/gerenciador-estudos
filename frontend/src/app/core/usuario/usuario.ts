
export class IUsuario {
    nome: string;
    email: string;
    senha: string;
    token: string;
}

export class Usuario {
    nome: string;
    email: string;
    senha: string;
    token: string;

    static doBackend(response: IUsuario): Usuario {
        let usuario = Object.create(Usuario.prototype);
        if (response == null) {
            return null;
        }

        usuario = Object.assign(usuario, response, {
        });
        return usuario;
    }

    paraBackend(): IUsuario {
        const usuario = Object.assign(Object.create(Usuario.prototype), this, {
        });

        return usuario;
    }
}

