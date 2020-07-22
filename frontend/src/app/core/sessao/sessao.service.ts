import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { configuracao } from 'src/app/configuracao';
import { TokenService } from '../token/token.service';
import { UsuarioService } from '../usuario/usuario.service';

const rotaRedirecionarAposLogin = 'rotaRedirecionarAposLogin';

@Injectable({ providedIn: 'root' })
export class SessaoService {

    constructor(
        private usuarioService: UsuarioService,
        private tokenService: TokenService,
    ) {
    }

    setToken(token: string) {
        this.usuarioService.setToken(token);
    }

    setUsuarioLogadoSistema(nome: string) {
        this.usuarioService.setUsuarioLogadoSistema(nome);
    }

    setRotaRedirecionarAposLogin(rota: string) {
        if (rota) {
            window.localStorage.setItem(rotaRedirecionarAposLogin, rota);
        } else {
            window.localStorage.setItem(rotaRedirecionarAposLogin, configuracao.rotaInicio);
        }
    }

    getRotaRedirecionarAposLogin() {
        return window.localStorage.getItem(rotaRedirecionarAposLogin);
    }

    hasToken() {
        return !!this.getToken();
    }

    getToken() {
        return this.tokenService.getToken();
    }

    getUsuarioLogado() {
        return this.usuarioService.getUsuario();
    }

    removeToken() {
        this.tokenService.removeToken();
    }

    deslogar() {
        this.tokenService.removeToken();
        this.usuarioService.removeNomeUsuarioLogado();
    }

}

