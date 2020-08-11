import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output, OnChanges, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material';
import { Toaster } from 'ngx-toast-notifications';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ErroService } from 'src/app/core/erro/erro.service';
import { Materia } from 'src/app/servico/materia/materia';
import { Topico } from 'src/app/servico/topico/topico';
import { TopicoService } from 'src/app/servico/topico/topico.service';

@Component({
  selector: 'app-auto-complete-topico',
  templateUrl: './auto-complete-topico.component.html',
  styleUrls: ['./auto-complete-topico.component.css']
})
export class AutoCompleteTopicoComponent implements OnInit, OnChanges {

  @Output() topicoAdicionadoEmitter = new EventEmitter<Topico>();
  controladorFormulario: FormControl;
  @Input() exibeErroTopico: ErrorStateMatcher;
  @Input() materia: Materia;
  public listaTopicoFiltrado: Observable<Topico[]>;
  public listaTopico: Topico[] = [];

  constructor(
    private topicoService: TopicoService,
    private erroService: ErroService,
    private toaster: Toaster
  ) {
    this.controladorFormulario = new FormControl();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes && changes.materia != null && changes.materia.currentValue != null) {
      this.topicoService.lista(this.materia.id).subscribe(lista => {
        this.listaTopico = lista;
        this.controladorFormulario.updateValueAndValidity();
      }, (erro: HttpErrorResponse) => {
        console.log(erro);
        this.erroService.exibeMensagemErro(erro.error.message, this.toaster);
      });

      this.listaTopicoFiltrado = this.controladorFormulario.valueChanges.pipe(
        map(valorDigitado => this.filtro(valorDigitado))
      );
    }
  }

  ngOnInit() {
  }

  private filtro(valor: string | Topico): Topico[] {
    if (!valor) {
      return this.listaTopico;
    }

    if (valor instanceof Topico) {
      return [valor];
    }
    const valorDigitado: string = valor.trim();
    const lista = this.listaTopico.filter(topico =>
      topico.nome.trim().includes(valor)
    );
    return lista;
  }

  exibeTopico(objeto: Topico) {
    return objeto != null ? objeto.nome : '';
  }

  habilitaBotaoAdicionar(): boolean {
    return this.controladorFormulario.value != null && this.controladorFormulario.value.id != null;
  }

  adicionaTopico() {
    this.topicoAdicionadoEmitter.emit(this.controladorFormulario.value);
  }
}
