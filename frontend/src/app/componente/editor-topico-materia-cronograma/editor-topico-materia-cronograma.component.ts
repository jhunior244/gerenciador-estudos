import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TopicoMateriaCronograma } from 'src/app/servico/cronograma/topico-materia-cronograma';
import { TopicoMateriaCronogramaService } from 'src/app/servico/cronograma/topico-materia-cronograma.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Toaster } from 'ngx-toast-notifications';
import { ErroService } from 'src/app/core/erro/erro.service';

@Component({
  selector: 'app-editor-topico-materia-cronograma',
  templateUrl: './editor-topico-materia-cronograma.component.html',
  styleUrls: ['./editor-topico-materia-cronograma.component.css']
})
export class EditorTopicoMateriaCronogramaComponent implements OnChanges {

  public formControlHoras: FormControl;
  public formControlQuestoes: FormControl;
  @Input() topicoMateriaCronograma: TopicoMateriaCronograma;
  @Output() topicoEditadoEmmiter = new EventEmitter<TopicoMateriaCronograma>();
  @Output() topicoDeletadoEmmiter = new EventEmitter<TopicoMateriaCronograma>();

  constructor(
    private topicoMateriaCronogramaService: TopicoMateriaCronogramaService,
    private erroService: ErroService,
    private toaster: Toaster,
  ) {
    this.formControlHoras = new FormControl([null]);
    this.formControlQuestoes = new FormControl([null]);
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes && changes.topicoMateriaCronograma && changes.topicoMateriaCronograma.currentValue != null) {
      this.formControlHoras.setValue(this.topicoMateriaCronograma.horasEstimadasEstudo);
      this.formControlQuestoes.setValue(this.topicoMateriaCronograma.questoesEstimadasEstudo);
    }
  }

  salvaHorasEstimadas($event: any, topicoMateria: TopicoMateriaCronograma) {
    topicoMateria.horasEstimadasEstudo = $event.srcElement.value;
    this.topicoEditadoEmmiter.emit(topicoMateria);
  }

  salvaQuestoesEstimadas($event: any, topicoMateria: TopicoMateriaCronograma) {
    topicoMateria.questoesEstimadasEstudo = $event.srcElement.value;
    this.topicoEditadoEmmiter.emit(topicoMateria);
  }

  deleta(topico: TopicoMateriaCronograma){
    this.topicoDeletadoEmmiter.emit(topico);
  }
}
