import { Component, OnInit } from '@angular/core';
import { configuracao } from 'src/app/configuracao';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/core/usuario/usuario';

@Component({
  selector: 'app-barra-menu',
  templateUrl: './barra-menu.component.html',
  styleUrls: ['./barra-menu.component.css']
})
export class BarraMenuComponent implements OnInit {
  public rotasSistema = configuracao;
  public usuarioLogado$: Observable<Usuario>;
  constructor() { }

  ngOnInit() {
  }

}
