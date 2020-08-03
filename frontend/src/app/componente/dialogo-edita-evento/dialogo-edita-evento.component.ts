import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Evento } from 'src/app/servico/evento/evento';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { EventoService } from 'src/app/servico/evento/evento.service';
import { TipoEvento } from 'src/app/servico/tipo-evento/tipo-evento';
import * as moment from 'moment';

@Component({
  selector: 'app-dialogo-edita-evento',
  templateUrl: './dialogo-edita-evento.component.html',
  styleUrls: ['./dialogo-edita-evento.component.css']
})
export class DialogoEditaEventoComponent implements OnInit {

  @Output() eventoCriadoOuAtualizado = new EventEmitter<void>();
  @Input() evento: Evento;
  @Input() dataFormulario: moment.Moment;
  public formGroup: FormGroup;
  public listaTipoEvento: TipoEvento[] = [];


  constructor(
    private formBuilder: FormBuilder,
    public activeModal: NgbActiveModal,
    private eventoService: EventoService
  ) {
    this.formGroup = this.formBuilder.group({
      nome: [null, Validators.compose([Validators.required])],
      descricao: [null],
      tipoEvento: [null, Validators.required],
      data: [null, Validators.required],
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
  get data(): AbstractControl { return this.formGroup.controls.data; }

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
    this.evento.data = moment(this.data.value);
  }

  cria() {
    this.formularioParaEvento();
    this.eventoService.cria(this.evento).subscribe(evento => {
      this.evento = evento;
      this.activeModal.close('Close click');
      this.eventoCriadoOuAtualizado.emit();
    });
  }

  preencheFormulario() {
    if (this.evento != null) {
      this.nome.setValue(this.evento.nome);
      this.descricao.setValue(this.evento.descricao);
      this.tipoEvento.setValue(this.evento.tipoEvento);
      this.data.setValue(this.evento.data.utc().format('YYYY-MM-DD'));
    } else {
      this.data.setValue(this.dataFormulario.utc().format('YYYY-MM-DD'));
    }

  }

  comparaTipoEvento(tipo1: TipoEvento, tipo2: TipoEvento) {
    if (tipo1 == null || tipo2 == null) {
      return false;
    }
    return tipo1.id === tipo2.id;
  }

}
