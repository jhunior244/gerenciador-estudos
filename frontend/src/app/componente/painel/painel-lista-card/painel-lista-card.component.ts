import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as moment from 'moment';
import { forkJoin } from 'rxjs';
import { configuracao } from 'src/app/configuracao';
import { Card } from 'src/app/servico/card/card';
import { CardService } from 'src/app/servico/card/card.service';
import { Evento } from 'src/app/servico/evento/evento';
import { EventoService } from 'src/app/servico/evento/evento.service';
import { DialogoEditaCardComponent } from '../../dialogo-edita-card/dialogo-edita-card.component';

@Component({
  selector: 'app-painel-lista-card',
  templateUrl: './painel-lista-card.component.html',
  styleUrls: ['./painel-lista-card.component.css']
})
export class PainelListaCardComponent implements OnInit {

  public lista: Card[] = [];
  public idEvento: string;
  private evento: Evento;
  displayedColumns: string[] = ['evento', 'dataUltimaRevisao', 'dataProximaRevisao'];

  constructor(
    private activatedRoute: ActivatedRoute,
    private cardService: CardService,
    private eventoService: EventoService,
    private modalService: NgbModal,
    private router: Router
  ) {
    this.activatedRoute.params.subscribe(params => {
      this.idEvento = params[configuracao.parametroId];
      const lista$ = this.cardService.listaTodosPorEvento(this.idEvento);
      const evento$ = this.eventoService.obtem(this.idEvento);
      forkJoin([evento$, lista$]).subscribe(resultados => {
        this.evento = resultados[0];
        this.lista = resultados[1];
      });
    });
  }

  ngOnInit() {
  }

  open(obj: Card) {
    const modalRef = this.modalService.open(DialogoEditaCardComponent);
    modalRef.componentInstance.card = obj;
    modalRef.componentInstance.evento = this.evento;
    modalRef.componentInstance.resumoCriadoOuAtualizado.subscribe(() => {
      this.cardService.listaTodosPorEvento(this.idEvento).subscribe(lista => {
        this.lista = lista;
      });
    });
  }

  revisaFlashCards() {
    this.router.navigate([configuracao.rotaRevisaCard + '/' + this.idEvento]);
  }

}
