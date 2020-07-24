import { Component, OnInit, Input } from '@angular/core';
import { Evento } from 'src/app/servico/evento/evento';
import { ActivatedRoute, Router } from '@angular/router';
import { EventoService } from 'src/app/servico/evento/evento.service';
import { configuracao } from 'src/app/configuracao';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { TipoEvento } from 'src/app/servico/tipo-evento/tipo-evento';
import * as moment from 'moment';

@Component({
  selector: 'app-painel-visualisa-evento',
  templateUrl: './painel-visualisa-evento.component.html',
  styleUrls: ['./painel-visualisa-evento.component.css']
})
export class PainelVisualisaEventoComponent implements OnInit {

  public evento: Evento;
  private idEvento: string;
  public formGroup: FormGroup;
  private dataFormulario: moment.Moment;
  public listaTipoEvento: TipoEvento[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private eventoService: EventoService,
    private router: Router
  ) {
    this.formGroup = this.formBuilder.group({
      nome: [null, Validators.compose([Validators.required])],
      descricao: [null],
      tipoEvento: [null, Validators.required],
      data: [null, Validators.required],
    });

    this.activatedRoute.params.subscribe(params => {
      this.idEvento = params[configuracao.parametroId];

      this.eventoService.obtem(this.idEvento).subscribe(evento => {
        this.evento = evento;
        this.preencheFormulario();
      });
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

  listaResumos(){
    this.router.navigate([configuracao.rotaPainelEstudos + '/' +  configuracao.rotaListaResumo + '/' + this.idEvento]);
  }

  listaFlashCard(){
    this.router.navigate([configuracao.rotaPainelEstudos + '/' +  configuracao.rotaListaCard + '/' + this.idEvento]);
  }

}
