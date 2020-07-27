import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { CalendarioService } from './servico/calendario/calendario.service';
import { DiaCalendario } from './servico/dia-calendario/dia-calendario';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  rows: DiaCalendario[] = [];
  public exibeAdd = false;
  public exibeDialogo = false;
  closeResult: string;
  public mes: number;
  public ano: number;
  
  constructor(
    private calendarioService: CalendarioService,
  ) {

    this.mes = Number.parseFloat(moment().utc().format('MM'));
    this.ano = Number.parseFloat(moment().utc().format('YYYY'));
    this.calendarioService.setMesEAno(this.mes, this.ano);
  }


  ngOnInit(): void {
  }
}
