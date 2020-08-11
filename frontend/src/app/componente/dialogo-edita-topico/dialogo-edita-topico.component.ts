import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Materia } from 'src/app/servico/materia/materia';
import { Topico } from 'src/app/servico/topico/topico';
import { TopicoService } from 'src/app/servico/topico/topico.service';
import { SessaoService } from 'src/app/core/sessao/sessao.service';
import { Toaster } from 'ngx-toast-notifications';
import { ErroService } from 'src/app/core/erro/erro.service';
import { HttpErrorResponse } from '@angular/common/http';
import { MateriaCronograma } from 'src/app/servico/cronograma/materia-cronograma';
import { TopicoMateriaCronograma } from 'src/app/servico/cronograma/topico-materia-cronograma';

@Component({
  selector: 'app-dialogo-edita-topico',
  templateUrl: './dialogo-edita-topico.component.html',
  styleUrls: ['./dialogo-edita-topico.component.css']
})
export class DialogoEditaTopicoComponent implements OnInit {

  @Input() materiaCronograma: MateriaCronograma;
  public materia = new Materia();
  public topico = new Topico();
  public topicoMateriaCronograma: TopicoMateriaCronograma;
  @Output() topicoCriadoOuAtualizado = new EventEmitter<MateriaCronograma>();
  public formGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    public activeModal: NgbActiveModal,
    private topicoService: TopicoService,
    private sessaoService: SessaoService,
    private erroService: ErroService,
    private toaster: Toaster) {
    this.formGroup = this.formBuilder.group({
      nome: [null, Validators.compose([Validators.required])],
      horasEstimadasEstudo: [null],
      questoesEstimadasEstudo: [null, Validators.required],
    });
  }

  get nome(): AbstractControl { return this.formGroup.controls.nome; }
  get horasEstimadasEstudo(): AbstractControl { return this.formGroup.controls.horasEstimadasEstudo; }
  get questoesEstimadasEstudo(): AbstractControl { return this.formGroup.controls.questoesEstimadasEstudo; }

  ngOnInit() {
  }

  formularioParaTopico() {
    this.topico.nome = this.nome.value;
    this.topico.horasEstimadasEstudo = this.horasEstimadasEstudo.value;
    this.topico.questoesEstimadasEstudo = this.questoesEstimadasEstudo.value;
    this.topico.materia = this.materiaCronograma.materia;
  }

  salva() {
    this.formularioParaTopico();
    if (this.topico.id == null) {
      this.topicoService.cria(this.topico).subscribe(topico => {
        if (this.materia.listaTopico == null) {
          this.materia.listaTopico = new Array();
        }
        this.materia.listaTopico.push(topico);
        this.topicoCriadoOuAtualizado.emit(this.materiaCronograma);
        this.activeModal.close('Close click');
      }, (erro: HttpErrorResponse) => {
        console.log(erro);
        this.erroService.exibeMensagemErro(erro.error.message, this.toaster);
        this.activeModal.close('Close click');
      });
    } else {
      this.topicoService.atualiza(this.topico).subscribe(topico => {
        if (this.materia.listaTopico == null) {
          this.materia.listaTopico = new Array();
        }
        this.materia.listaTopico.push(topico);
        this.topicoCriadoOuAtualizado.emit(this.materiaCronograma);
        this.activeModal.close('Close click');
      }, (erro: HttpErrorResponse) => {
        console.log(erro);
        this.erroService.exibeMensagemErro(erro.error.message, this.toaster);
        this.activeModal.close('Close click');
      });
    }
  }
}
