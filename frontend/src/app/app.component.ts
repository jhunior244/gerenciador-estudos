import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DiaCalendario } from './servico/dia-calendario/dia-calendario';
import { DiaCalendarioService } from './servico/dia-calendario/dia-calendario.service';

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

  alteraExibeDialogo() {
    this.exibeDialogo = true;
  }


  open(content) {
    console.log(content);
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
