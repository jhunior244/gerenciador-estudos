import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DiaCalendario } from './servico/dia-calendario/dia-calendario';
import { DiaCalendarioService } from './servico/dia-calendario/dia-calendario.service';
import { DialogoEditaEventoComponent } from './componente/dialogo-edita-evento/dialogo-edita-evento.component';
import { Evento } from './servico/evento/evento';
import * as moment from 'moment';
import { CalendarioService } from './servico/calendario/calendario.service';

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
    private diaCalendarioService: DiaCalendarioService,
    private modalService: NgbModal,
    private calendarioService: CalendarioService
  ) {

    this.mes = Number.parseFloat(moment().utc().format('MM'));
    this.ano = Number.parseFloat(moment().utc().format('YYYY'));
    this.calendarioService.setMesEAno(this.mes, this.ano);
  }


  ngOnInit(): void {
  }
}
