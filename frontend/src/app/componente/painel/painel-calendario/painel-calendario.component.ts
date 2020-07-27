import { Component, OnInit, Input } from '@angular/core';
import { DiaCalendario } from 'src/app/servico/dia-calendario/dia-calendario';
import { Evento } from 'src/app/servico/evento/evento';
import { DialogoEditaEventoComponent } from '../../dialogo-edita-evento/dialogo-edita-evento.component';
import { CalendarioService } from 'src/app/servico/calendario/calendario.service';
import { forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';
import { DiaCalendarioService } from 'src/app/servico/dia-calendario/dia-calendario.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as moment from 'moment';
import { Router } from '@angular/router';
import { configuracao } from 'src/app/configuracao';

@Component({
  selector: 'app-painel-calendario',
  templateUrl: './painel-calendario.component.html',
  styleUrls: ['./painel-calendario.component.css']
})
export class PainelCalendarioComponent implements OnInit {

  @Input() rows: DiaCalendario[] = [];
  public teste = 'teste';
  constructor(
    private diaCalendarioService: DiaCalendarioService,
    private modalService: NgbModal,
    private calendarioService: CalendarioService,
    private router: Router,
  ) {
  }

  ngOnInit() {
    this.calendarioService.getMesEAno().subscribe(observer => {
      if (observer) {
        this.diaCalendarioService.lista(observer.mes, observer.ano).subscribe(lista => {
          this.rows = DiaCalendario.groupColumns(lista);
        });
      }
    });
  }

  exibeBotaoAdd(id: string) {
    const teste = document.getElementById(id.toString());
    teste.style.display = 'block';
  }

  escondeBotaoAdd(id: DiaCalendario) {
    const teste = document.getElementById(id.toString());
    teste.style.display = 'none';
  }

  open(evento: Evento, data: moment.Moment) {
    const modalRef = this.modalService.open(DialogoEditaEventoComponent);
    modalRef.componentInstance.evento = evento;
    modalRef.componentInstance.dataFormulario = data;
    modalRef.componentInstance.eventoCriadoOuAtualizado.subscribe(() => {
      this.calendarioService.getMesEAno().subscribe(observer => {
        if (observer) {
          this.diaCalendarioService.lista(observer.mes, observer.ano).subscribe(lista => {
            this.rows = DiaCalendario.groupColumns(lista);
          });
        }
      });
    });

  }

  listaResumoPorEvento(evento: Evento) {
    this.router.navigate([configuracao.rotaPainelEstudos + '/' + configuracao.rotaVisualizaEvento + '/' + evento.id]);
  }
}
