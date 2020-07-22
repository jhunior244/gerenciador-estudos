import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { configuracao } from '../../configuracao';
import { tap, map } from 'rxjs/operators';
import { TokenService } from '../token/token.service';
import { UsuarioService } from '../usuario/usuario.service';
import { Usuario } from '../usuario/usuario';
import { Observable } from 'rxjs';
import { SessaoService } from '../sessao/sessao.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url = 'http://localhost:8080' + '/auth';
  httpHeader = new HttpHeaders();
  constructor(
    private http: HttpClient,
    private usuarioService: UsuarioService,
    private sessaoService: SessaoService
  ) {
    this.httpHeader = this.httpHeader.append('Content-Type', 'application/json');
  }

  autenticar(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.url + '/login',
      usuario.paraBackend(), { headers: this.httpHeader })
      .pipe(tap(usuarioRetornado => {
        this.sessaoService.setToken(usuarioRetornado.token);
        this.sessaoService.setUsuarioLogadoSistema(usuarioRetornado.nome);
        if (this.sessaoService.getRotaRedirecionarAposLogin() == null) {
          this.sessaoService.setRotaRedirecionarAposLogin('http://localhost:4200/calendario');
        }
      }));
  }
}
