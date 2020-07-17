import { Component, OnInit, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, AbstractControl, Validators } from '@angular/forms';
import { Resumo } from 'src/app/servico/resumo/resumo';
import { ResumoService } from 'src/app/servico/resumo/resumo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { configuracao } from 'src/app/configuracao';
import { forkJoin } from 'rxjs';
import { EventoService } from 'src/app/servico/evento/evento.service';
import { Evento } from 'src/app/servico/evento/evento';
import { ContentChange } from 'ngx-quill';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as moment from 'moment';

@Component({
  selector: 'app-editor-texto',
  templateUrl: './editor-texto.component.html',
  styleUrls: ['./editor-texto.component.css']
})
export class EditorTextoComponent implements OnInit, AfterViewInit {

  public mensagemSalvouResumo = '';
  public editorForm: FormGroup;
  public tituloEventoControl = new FormControl();
  public tituloResumoControl = new FormControl();
  public resumo: Resumo;
  public evento: Evento;
  public editorContent: string;
  private id: string;
  private idEvento: string;
  editorStyle = {
    minheight: '80%',
    backgroundColor: 'white',
    margin: '20px',
    height: '80%'
  };

  config = {
    toolbar: ['bold', 'italic', 'underline']
  };

  @ViewChild('tituloEvento', { read: ElementRef, static: true }) tituloEvento: ElementRef;
  @ViewChild('tituloResumo', { read: ElementRef, static: true }) tituloResumo: ElementRef;
  @ViewChild('teste', { read: ElementRef, static: true }) teste: HTMLSpanElement;

  constructor(
    private activatedRoute: ActivatedRoute,
    private resumoService: ResumoService,
    private eventoService: EventoService,
    private formBuilder: FormBuilder,
    private modalService: NgbModal,
    private router: Router
  ) {
    this.editorForm = formBuilder.group({
      editor: [null, Validators.required]
    });

    this.activatedRoute.queryParams.subscribe(queryParams => {
      this.id = queryParams.id;
      this.idEvento = queryParams.idEvento;
      const resumo$ = this.resumoService.obtem(this.id);
      const evento$ = this.eventoService.obtem(this.idEvento);
      forkJoin([resumo$, evento$]).subscribe(resultados => {
        this.resumo = resultados[0];
        this.evento = resultados[1];
        this.setConteudoResumo(this.resumo, this.evento);
      });
    });
  }
  ngAfterViewInit(): void {
  }

  calculaTamanhoInputTitulos() {
    this.tituloEvento.nativeElement.style.width = (this.tituloEvento.nativeElement.value.trim().length + 1) + 'ch';
    this.tituloResumo.nativeElement.style.width = this.tituloResumo.nativeElement.value.trim().length + 1 + 'ch';
    if (this.tituloEvento.nativeElement.style.width === '1ch' ||
      (this.tituloEvento.nativeElement.value == null || this.tituloEvento.nativeElement.value.trim() === '')) {
      this.tituloEventoControl.setValue('Evento sem título');
      this.calculaTamanhoInputTitulos();
    }
    if (this.tituloResumo.nativeElement.style.width === '1ch') {
      this.tituloResumoControl.setValue('Resumo sem título');
      this.calculaTamanhoInputTitulos();
    }
  }

  get editor(): AbstractControl { return this.editorForm.controls.editor; }

  ngOnInit() {

  }

  exibeMensagemSalvar() {
    this.mensagemSalvouResumo = 'Alterações salvas: ' + moment().format('h:mm:ss a').toString();
    setTimeout(() => {
      this.mensagemSalvouResumo = '';
    }, 5000);
  }

  salvaTitulos() {
    this.calculaTamanhoInputTitulos();
    if (this.resumo == null) {
      this.resumo = new Resumo();
    }
    this.resumo.titulo = this.tituloResumoControl.value;
    this.resumo.evento = this.evento;
    this.evento.nome = this.tituloEventoControl.value;
    const resumo$ = this.resumoService.cria(this.resumo);
    const evento$ = this.eventoService.atualiza(this.evento);
    forkJoin([resumo$, evento$]).subscribe(resultados => {
      this.resumo = resultados[0];
      this.evento = resultados[1];
      this.atualizaRota();
    });
    this.exibeMensagemSalvar();
  }

  onSubmit() {
    if (this.resumo == null) {
      this.resumo = new Resumo();
    }
    this.resumo.titulo = this.tituloResumoControl.value;
    this.resumo.conteudo = this.editorForm.get('editor').value;
    this.resumo.evento = this.evento;
    this.resumoService.cria(this.resumo).subscribe(resumoCriado => {
      this.resumo = resumoCriado;
      this.exibeMensagemSalvar();
      this.atualizaRota();
    });

    this.editorContent = this.editorForm.get('editor').value;
  }

  maxLength(event: ContentChange) {
    if (event.text.length > 25000) {
      event.text.substring(0, 25000);
    }
  }

  setConteudoResumo(resumo: Resumo, evento: Evento) {
    if (resumo != null) {
      this.editor.setValue(resumo.conteudo);
      this.tituloResumoControl.setValue(resumo.titulo);
    }

    if (evento != null) {
      this.tituloEventoControl.setValue(evento.nome);
    }
    this.calculaTamanhoInputTitulos();
  }

  atualizaRota() {
    console.log(this.resumo.id);
    if (this.evento != null && this.resumo != null) {
      this.router.navigate([],
        { queryParams: { idEvento: this.idEvento, id: this.resumo.id, titulo: this.resumo.titulo } });
    }
  }

}
