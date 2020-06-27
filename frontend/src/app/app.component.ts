import { Component, OnInit } from '@angular/core';
import { DiaCalendario } from './servico/dia-calendario/dia-calendario';
import * as moment from 'moment';
import { Evento } from './servico/evento/evento';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  rows: DiaCalendario[] = [];

  constructor() { }
  ngOnInit(): void {

    const evento: Evento = { id: 1, nome: 'teste', descricao: 'teste' };
    const listaEventos: Evento[] = [];
    listaEventos.push(evento);
    listaEventos.push(evento);
    listaEventos.push(evento);
    listaEventos.push(evento);
    listaEventos.push(evento);
    listaEventos.push(evento);

    let diaCalendario: DiaCalendario = { data: moment(), listaEvento: listaEventos };
    const listaDiaCalendario: DiaCalendario[] = []; 

    listaDiaCalendario.push(diaCalendario);
    listaDiaCalendario.push(diaCalendario);
    listaDiaCalendario.push(diaCalendario); 
    listaDiaCalendario.push(diaCalendario);
    listaDiaCalendario.push(diaCalendario);
    listaDiaCalendario.push(diaCalendario);
    listaDiaCalendario.push(diaCalendario);
    listaDiaCalendario.push(diaCalendario);
    listaDiaCalendario.push(diaCalendario);
    listaDiaCalendario.push(diaCalendario);
    listaDiaCalendario.push(diaCalendario);
    listaDiaCalendario.push(diaCalendario);
    listaDiaCalendario.push(diaCalendario);
    listaDiaCalendario.push(diaCalendario);
    listaDiaCalendario.push(diaCalendario);
    listaDiaCalendario.push(diaCalendario);
    listaDiaCalendario.push(diaCalendario);
    listaDiaCalendario.push(diaCalendario);
    listaDiaCalendario.push(diaCalendario);
    listaDiaCalendario.push(diaCalendario);
    listaDiaCalendario.push(diaCalendario);
    listaDiaCalendario.push(diaCalendario);
    listaDiaCalendario.push(diaCalendario);
    listaDiaCalendario.push(diaCalendario);
    listaDiaCalendario.push(diaCalendario);
    listaDiaCalendario.push(diaCalendario);
    listaDiaCalendario.push(diaCalendario);
    listaDiaCalendario.push(diaCalendario);
    listaDiaCalendario.push(diaCalendario);
    listaDiaCalendario.push(diaCalendario);
    listaDiaCalendario.push(diaCalendario);
    listaDiaCalendario.push(diaCalendario);
    listaDiaCalendario.push(diaCalendario);
    listaDiaCalendario.push(diaCalendario);
    listaDiaCalendario.push(diaCalendario);

    this.rows = this.groupColumns(listaDiaCalendario);
    console.log(this.rows);

  }

  groupColumns(lista: DiaCalendario[]) {
    const newRows = [];

    for (let index = 0; index < lista.length; index += 7) {
      newRows.push(lista.slice(index, index + 7));
    }
    return newRows;
  }
}
