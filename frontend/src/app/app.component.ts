import { Component, OnInit } from '@angular/core';
import { DiaCalendario } from './servico/dia-calendario/dia-calendario';
import * as moment from 'moment';
import { Evento } from './servico/evento/evento';
import { DiaCalendarioService } from './servico/dia-calendario/dia-calendario.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  rows: DiaCalendario[] = [];
  public exibeAdd = false;

  constructor(private diaCalendarioService: DiaCalendarioService) { }
  ngOnInit(): void {

    this.diaCalendarioService.lista(5, 2020).subscribe(lista => {
      this.rows = this.groupColumns(lista);
      console.log(this.rows[2][1].data.format('D'));
    });

  }

  groupColumns(lista: DiaCalendario[]) {
    const newRows = [];

    for (let index = 0; index < lista.length; index += 7) {
      newRows.push(lista.slice(index, index + 7));
    }
    return newRows;
  }

  teste(mostra: boolean){
    this.exibeAdd = mostra;
    console.log(mostra);
  }
}
