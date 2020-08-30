import { Component, OnInit, EventEmitter, Input, Output, Inject } from '@angular/core';
import { Evento } from 'src/app/servico/evento/evento';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { EventoService } from 'src/app/servico/evento/evento.service';
import { TipoEvento } from 'src/app/servico/tipo-evento/tipo-evento';
import * as moment from 'moment';
import { DateAdapter, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-dialogo-edita-evento',
  templateUrl: './dialogo-edita-evento.component.html',
  styleUrls: ['./dialogo-edita-evento.component.css']
})
export class DialogoEditaEventoComponent implements OnInit {

  public minDate = new Date(1960, 0, 1);
  public maxDate = new Date(2999, 0, 1);

  @Output() eventoCriadoOuAtualizado = new EventEmitter<void>();
  evento: Evento;
  dataFormulario: moment.Moment;
  public formGroup: FormGroup;
  public listaTipoEvento: TipoEvento[] = [];


  constructor(
    public dialogRef: MatDialogRef<DialogoEditaEventoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { evento: Evento, dataFormulario: moment.Moment },
    private formBuilder: FormBuilder,
    private eventoService: EventoService,
    private dateAdapter: DateAdapter<Date>
  ) {
    this.evento = data.evento;
    this.dataFormulario = data.dataFormulario;
    this.dateAdapter.setLocale('br');

    this.formGroup = this.formBuilder.group({
      nome: [null, Validators.compose([Validators.required])],
      descricao: [null],
      tipoEvento: [null, Validators.required],
      dataEvento: [null, Validators.required],
      cronograma: [null, Validators.required]
    });
    const tipo1 = new TipoEvento();
    tipo1.id = 1;
    tipo1.nome = 'Prova';

    const tipo2 = new TipoEvento();
    tipo2.id = 2;
    tipo2.nome = 'Trabalho';

    const tipo3 = new TipoEvento();
    tipo3.id = 3;
    tipo3.nome = 'Exercicio Avaliativo';

    this.listaTipoEvento.push(tipo1, tipo2, tipo3);
  }

  get nome(): AbstractControl { return this.formGroup.controls.nome; }
  get descricao(): AbstractControl { return this.formGroup.controls.descricao; }
  get tipoEvento(): AbstractControl { return this.formGroup.controls.tipoEvento; }
  get dataEvento(): AbstractControl { return this.formGroup.controls.dataEvento; }
  get cronograma(): AbstractControl { return this.formGroup.controls.cronograma; }

  ngOnInit() {
    this.preencheFormulario();
  }

  formularioParaEvento() {
    if (this.evento == null) {
      this.evento = new Evento();
    }
    this.evento.nome = this.nome.value;
    this.evento.descricao = this.descricao.value;
    this.evento.tipoEvento = this.tipoEvento.value;
    this.evento.data = moment(this.dataEvento.value);
    this.evento.cronograma = this.cronograma.value;
  }

  cria() {
    this.formularioParaEvento();
    this.eventoService.cria(this.evento).subscribe(evento => {
      this.evento = evento;
      this.dialogRef.close();
      this.eventoCriadoOuAtualizado.emit();
    });
  }

  preencheFormulario() {
    if (this.evento != null) {
      this.nome.setValue(this.evento.nome);
      this.descricao.setValue(this.evento.descricao);
      this.tipoEvento.setValue(this.evento.tipoEvento);
      this.dataEvento.setValue(this.evento.data.utc().format('YYYY-MM-DD'));
    } else {
      this.dataEvento.setValue(this.dataFormulario.utc().format('YYYY-MM-DD'));
    }

  }

  comparaTipoEvento(tipo1: TipoEvento, tipo2: TipoEvento) {
    if (tipo1 == null || tipo2 == null) {
      return false;
    }
    return tipo1.id === tipo2.id;
  }

  fecha() {
    this.dialogRef.close();
  }

}
