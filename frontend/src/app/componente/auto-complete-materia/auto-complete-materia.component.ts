import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { Materia } from 'src/app/servico/materia/materia';
import { FormControl } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material';
import { MateriaService } from 'src/app/servico/materia/materia.service';
import { SessaoService } from 'src/app/core/sessao/sessao.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ErroService } from 'src/app/core/erro/erro.service';
import { Toaster } from 'ngx-toast-notifications';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-auto-complete-materia',
  templateUrl: './auto-complete-materia.component.html',
  styleUrls: ['./auto-complete-materia.component.css']
})
export class AutoCompleteMateriaComponent implements OnInit {

  @Output() materiaAdicionadaEmitter = new EventEmitter<Materia>();
  @Input() controladorFormulario: FormControl;
  @Input() exibeErroMateria: ErrorStateMatcher;
  public listaMateriaFiltrada: Observable<Materia[]>;
  public listaMateria: Materia[] = [];

  constructor(
    private materiaService: MateriaService,
    private erroService: ErroService,
    private toaster: Toaster
  ) { }

  ngOnInit() {
    this.materiaService.lista().subscribe(lista => {
      this.listaMateria = lista;
      this.controladorFormulario.updateValueAndValidity();
    }, (erro: HttpErrorResponse) => {
      console.log(erro);
      this.erroService.exibeMensagemErro(erro.error.message, this.toaster);
    });

    this.listaMateriaFiltrada = this.controladorFormulario.valueChanges.pipe(
      map(valorDigitado => this.filtro(valorDigitado))
    );
  }

  private filtro(valor: string | Materia): Materia[] {
    if (!valor) {
      return this.listaMateria;
    }

    if (valor instanceof Materia) {
      return [valor];
    }
    const valorDigitado: string = valor.trim();
    const lista = this.listaMateria.filter(materia =>
      materia.nome.trim().includes(valor)
    );
    return lista;
  }

  exibeMateria(objeto: Materia) {
    return objeto != null ? objeto.nome : '';
  }

  adicionaMateria(){
    this.materiaAdicionadaEmitter.emit(this.controladorFormulario.value);
  }
}
