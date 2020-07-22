import { Component } from "@angular/core";
import { configuracao } from 'src/app/configuracao';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/core/usuario/usuario';
import { SessaoService } from 'src/app/core/sessao/sessao.service';

@Component({
  selector: 'app-tela-conta',
  templateUrl: './tela-conta.component.html',
  styleUrls: ['./tela-conta.component.css']
})
export class TelaContaComponent {
  public rotasSistema = configuracao;
  public usuarioLogado$: Observable<Usuario>;
  public exibeExpansion = false;
  constructor(
    private sessaoService: SessaoService,
  ) {
    this.usuarioLogado$ = this.sessaoService.getUsuarioLogado();
    
  }

  deslogar() {
    this.sessaoService.deslogar();
  }
}