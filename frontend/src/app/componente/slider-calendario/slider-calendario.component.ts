import { Component, OnInit } from '@angular/core';
import { DiaCalendarioService } from 'src/app/servico/dia-calendario/dia-calendario.service';
import { DiaCalendario } from 'src/app/servico/dia-calendario/dia-calendario';
import * as moment from 'moment';
import { CalendarioService } from 'src/app/servico/calendario/calendario.service';
import { forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';
import { configuracao } from 'src/app/configuracao';

@Component({
  selector: 'app-slider-calendario',
  templateUrl: './slider-calendario.component.html',
  styleUrls: ['./slider-calendario.component.css']
})
export class SliderCalendarioComponent implements OnInit {

  public mes: number;
  public ano: number;
  public rotaCalendario = configuracao.rotaCalendario;

  constructor(
    private diaCalendarioService: DiaCalendarioService,
    private calendarioService: CalendarioService
  ) {
   }

  ngOnInit() {
    this.calendarioService.getMesEAno().subscribe(observer => {
      if (observer) {
        this.mes = observer.mes;
        this.ano = observer.ano;
      }
    });
  }

  avancaMes() {
    if (this.mes === 12) {
      this.mes = 1;
      this.ano = ++this.ano;

    } else {
      this.mes = ++this.mes;
    }

    this.calendarioService.setMesEAno(
      this.mes,
      this.ano
      );
  }

  retornaMes() {
    if (this.mes === 1) {
      this.mes = 12;
      this.ano = --this.ano;
    } else {
      this.mes = --this.mes;
    }

    this.calendarioService.setMesEAno(
      this.mes,
      this.ano
      );
  }

}
