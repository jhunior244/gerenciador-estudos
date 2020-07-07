import { Component, OnInit } from '@angular/core';
import { ResumoService } from 'src/app/servico/resumo/resumo.service';
import { Resumo } from 'src/app/servico/resumo/resumo';
import { configuracao } from 'src/app/configuracao';

@Component({
  selector: 'app-painel-lista-resumo',
  templateUrl: './painel-lista-resumo.component.html',
  styleUrls: ['./painel-lista-resumo.component.css']
})
export class PainelListaResumoComponent implements OnInit {
  public lista: Resumo[] = [];
  displayedColumns: string[] = ['titulo', 'dataCriacao', 'dataUltimaAtualizacao'];

  constructor(
    private resumoService: ResumoService
  ) { 
    this.resumoService.lista().subscribe(listaRetornada => {
      this.lista = listaRetornada;
      console.log(listaRetornada);
    });
  }

  ngOnInit() {
  }

}
