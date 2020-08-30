import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material';
import { SessaoService } from 'src/app/core/sessao/sessao.service';
import { Cronograma } from 'src/app/servico/cronograma/cronograma';
import { CronogramaService } from 'src/app/servico/cronograma/cronograma.service';

@Component({
  selector: 'app-select-cronograma',
  templateUrl: './select-cronograma.component.html',
  styleUrls: ['./select-cronograma.component.css']
})
export class SelectCronogramaComponent implements OnInit {

  @Input() controladorFormulario: FormControl;
  @Input() obrigatorio = false;
  @Input() multiplo = false;
  @Input() reservadorEspaco: string;
  @Input() exibeErro: ErrorStateMatcher;
  @Input() idSelect: string;

  public listaCronograma: Cronograma[] = [];

  constructor(
    private cronogramaService: CronogramaService,
    private sessaoService: SessaoService) { }

  get possuiReservadorEspaco(): boolean {
    return this.reservadorEspaco && this.reservadorEspaco !== '';
  }

  ngOnInit() {
    this.cronogramaService.lista().subscribe(lista => {
      this.listaCronograma = lista;
    });
  }

  comparaCronograma(cronograma1: Cronograma, cronograma2: Cronograma): boolean {
    return cronograma1 && cronograma2 && cronograma1.id === cronograma2.id;
  }

  teste(event){
    this.sessaoService.setListaCronograma(event.value);
  }
}
