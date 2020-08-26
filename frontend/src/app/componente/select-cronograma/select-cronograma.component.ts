import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material';
import { Usuario } from 'src/app/core/usuario/usuario';
import { UsuarioService } from 'src/app/core/usuario/usuario.service';
import { SessaoService } from 'src/app/core/sessao/sessao.service';
import { HttpErrorResponse } from '@angular/common/http';
import { CronogramaService } from 'src/app/servico/cronograma/cronograma.service';
import { Cronograma } from 'src/app/servico/cronograma/cronograma';

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

}
