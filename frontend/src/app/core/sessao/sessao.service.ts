import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { configuracao } from 'src/app/configuracao';
import { TokenService } from '../token/token.service';
import { UsuarioService } from '../usuario/usuario.service';
import { BehaviorSubject } from 'rxjs';
import { Usuario } from '../usuario/usuario';
import { Cronograma } from 'src/app/servico/cronograma/cronograma';

const rotaRedirecionarAposLogin = 'rotaRedirecionarAposLogin';

@Injectable({ providedIn: 'root' })
export class SessaoService {

    private listaCronogramaSubject = new BehaviorSubject<Cronograma[]>(null);

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
            window.localStorage.setItem(rotaRedirecionarAposLogin, configuracao.rotaPainelEstudos);
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

    setListaCronograma(lista: Cronograma[]) {
        this.listaCronogramaSubject.next(lista);
    }

    getListaCronograma() {
        return this.listaCronogramaSubject.asObservable();
    }

}

