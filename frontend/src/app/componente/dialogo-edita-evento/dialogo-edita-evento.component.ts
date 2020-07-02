import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dialogo-edita-evento',
  templateUrl: './dialogo-edita-evento.component.html',
  styleUrls: ['./dialogo-edita-evento.component.css']
})
export class DialogoEditaEventoComponent implements OnInit {

  public emiteEventoFechar = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit() {
  }

  fecha(){
    this.emiteEventoFechar.emit(false);
  }

}
