import { Component, OnInit } from '@angular/core';
import { ResumoService } from 'src/app/servico/resumo/resumo.service';
import { Resumo } from 'src/app/servico/resumo/resumo';
import { configuracao } from 'src/app/configuracao';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-painel-lista-resumo',
  templateUrl: './painel-lista-resumo.component.html',
  styleUrls: ['./painel-lista-resumo.component.css']
})
export class PainelListaResumoComponent implements OnInit {
  public lista: Resumo[] = [];
  public idEvento: string;
  displayedColumns: string[] = ['titulo', 'dataCriacao', 'dataUltimaAtualizacao'];

  constructor(
    private activatedRoute: ActivatedRoute,
    private resumoService: ResumoService,
    private router: Router
  ) {
    this.activatedRoute.params.subscribe(params => {
      this.idEvento = params[configuracao.parametroId];
      this.resumoService.lista(this.idEvento).subscribe(listaRetornada => {
        this.lista = listaRetornada;
      });
    });
  }

  ngOnInit() {
  }

  teste(resumo: Resumo) {
    this.router.navigate([configuracao.rotaResumoEvento],
      { queryParams: { idEvento: this.idEvento, id: resumo.id, titulo: resumo.titulo } });
  }

}
