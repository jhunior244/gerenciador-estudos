import { Component, OnInit } from '@angular/core';
import { configuracao } from 'src/app/configuracao';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/core/usuario/usuario';
import { SessaoService } from 'src/app/core/sessao/sessao.service';

@Component({
  selector: 'app-barra-menu',
  templateUrl: './barra-menu.component.html',
  styleUrls: ['./barra-menu.component.css']
})
export class BarraMenuComponent implements OnInit {
  public rotasSistema = configuracao;
  public usuarioLogado$: Observable<Usuario>;
  constructor(
    private sessaoService: SessaoService
  ) {
    this.usuarioLogado$ = this.sessaoService.getUsuarioLogado();
  }

  ngOnInit() {
  }
  deslogar() {
    this.sessaoService.deslogar();
  }
}
