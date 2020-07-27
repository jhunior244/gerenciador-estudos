import { Component, OnInit } from "@angular/core";
import { ChildActivationStart, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { configuracao } from 'src/app/configuracao';
import { SessaoService } from 'src/app/core/sessao/sessao.service';
import { Usuario } from 'src/app/core/usuario/usuario';

@Component({
  selector: 'app-tela-conta',
  templateUrl: './tela-conta.component.html',
  styleUrls: ['./tela-conta.component.css']
})
export class TelaContaComponent implements OnInit {
  public rotasSistema = configuracao;
  public usuarioLogado$: Observable<Usuario>;
  public exibeExpansion = false;
  constructor(
    private sessaoService: SessaoService,
    private router: Router
  ) {
    this.usuarioLogado$ = this.sessaoService.getUsuarioLogado();
  }
  ngOnInit(): void {
    this.router.events.pipe(filter(event => event instanceof ChildActivationStart)
    ).subscribe((event: ChildActivationStart) => {
      this.calculaAbaAtiva(event.snapshot.children[0].url[0].path);
    });
  }

  deslogar() {
    this.sessaoService.deslogar();
  }

  calculaAbaAtiva(rota: string) {
    if (rota === this.rotasSistema.rotaLogin) {
      document.getElementById('entrar').classList.add('active');
      document.getElementById('cadastrar').classList.remove('active');
    } else {
      document.getElementById('cadastrar').classList.add('active');
      document.getElementById('entrar').classList.remove('active');
    }
  }
}