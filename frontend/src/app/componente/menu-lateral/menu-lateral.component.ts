import { Component, OnInit } from '@angular/core';
import { DiaCalendarioService } from 'src/app/servico/dia-calendario/dia-calendario.service';
import { DiaCalendario } from 'src/app/servico/dia-calendario/dia-calendario';
import * as moment from 'moment';
import { CalendarioService } from 'src/app/servico/calendario/calendario.service';
import { forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';
import { configuracao } from 'src/app/configuracao';

@Component({
  selector: 'app-menu-lateral',
  templateUrl: './menu-lateral.component.html',
  styleUrls: ['./menu-lateral.component.css']
})
export class MenuLateralComponent implements OnInit {

  public rotaListaResumo = configuracao.rotaListaResumo;
  
  constructor(
  ) {
   }

  ngOnInit() {
    
  }

}
