import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DiaCalendario } from './servico/dia-calendario/dia-calendario';
import { DiaCalendarioService } from './servico/dia-calendario/dia-calendario.service';
import { DialogoEditaEventoComponent } from './componente/dialogo-edita-evento/dialogo-edita-evento.component';
import { Evento } from './servico/evento/evento';

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

  constructor(
    private diaCalendarioService: DiaCalendarioService,
    private modalService: NgbModal
  ) { }
  ngOnInit(): void {

    this.diaCalendarioService.lista(5, 2020).subscribe(lista => {
      this.rows = this.groupColumns(lista);
    });

  }

  groupColumns(lista: DiaCalendario[]) {
    const newRows = [];

    for (let index = 0; index < lista.length; index += 7) {
      newRows.push(lista.slice(index, index + 7));
    }
    return newRows;
  }

  exibeBotaoAdd(id: string) {
    const teste = document.getElementById(id.toString());
    teste.style.display = 'block';
  }

  escondeBotaoAdd(id: DiaCalendario) {
    const teste = document.getElementById(id.toString());
    teste.style.display = 'none';
  }
  
  open(evento: Evento) {
    const modalRef = this.modalService.open(DialogoEditaEventoComponent);
    modalRef.componentInstance.evento = evento;
    modalRef.componentInstance.eventoCriadoOuAtualizado.subscribe(() => {
      this.diaCalendarioService.lista(5, 2020).subscribe(lista => {
        this.rows = this.groupColumns(lista);
        console.log(this.rows);
      });
    });
  }
}
