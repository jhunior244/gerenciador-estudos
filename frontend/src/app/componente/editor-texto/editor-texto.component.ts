import { Component, OnInit, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, AbstractControl, Validators } from '@angular/forms';
import { Resumo } from 'src/app/servico/resumo/resumo';
import { ResumoService } from 'src/app/servico/resumo/resumo.service';
import { ActivatedRoute } from '@angular/router';
import { configuracao } from 'src/app/configuracao';
import { forkJoin } from 'rxjs';
import { EventoService } from 'src/app/servico/evento/evento.service';
import { Evento } from 'src/app/servico/evento/evento';
import { ContentChange } from 'ngx-quill';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DialogoEditaTituloResumoComponent } from '../dialogo-edita-titulo-resumo/dialogo-edita-titulo-resumo.component';

@Component({
  selector: 'app-editor-texto',
  templateUrl: './editor-texto.component.html',
  styleUrls: ['./editor-texto.component.css']
})
export class EditorTextoComponent implements OnInit, AfterViewInit {

  public editorForm: FormGroup;
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
        this.setConteudoResumo(this.resumo);
      });
    });
  }
  ngAfterViewInit(): void {
    // onkeypress="this.style.width = ((this.value.length + 1) * 8) + 'px';";
    this.calculaTamanhoInputTitulos();

  }

  calculaTamanhoInputTitulos() {
    this.tituloEvento.nativeElement.style.width = ((this.tituloEvento.nativeElement.value.length + 1) * 10) + 'px';
    this.tituloResumo.nativeElement.style.width = this.tituloResumo.nativeElement.value.length + 1 + 'ch';

    console.log(this.teste);
  }

  get editor(): AbstractControl { return this.editorForm.controls.editor; }

  ngOnInit() {

  }

  onSubmit() {
    if (this.resumo == null) {
      this.resumo = new Resumo();
      this.abreDialogoTitulo(this.resumo);
    }
    this.resumo.titulo = 'Titulo teste';
    this.resumo.conteudo = this.editorForm.get('editor').value;
    this.resumo.evento = this.evento;
    this.resumoService.cria(this.resumo).subscribe(resumoCriado => {
      this.resumo = this.resumo;
    });

    this.editorContent = this.editorForm.get('editor').value;
  }

  abreDialogoTitulo(resumo: Resumo) {
    // const modalRef = this.modalService.open(DialogoEditaTituloResumoComponent);
    // modalRef.componentInstance.evento = evento;
    // modalRef.componentInstance.eventoCriadoOuAtualizado.subscribe(() => {
    //   this.calendarioService.getMesEAno().subscribe(observer => {
    //     if (observer) {
    //       this.diaCalendarioService.lista(observer.mes, observer.ano).subscribe(lista => {
    //         this.rows = DiaCalendario.groupColumns(lista);
    //       });
    //     }
    //   });
    // });
  }

  maxLength(event: ContentChange) {
    if (event.text.length > 25000) {
      event.text.substring(0, 25000);
      console.log(event.text.length);
    }
  }

  setConteudoResumo(resumo: Resumo) {
    if (resumo == null) {
      return;
    }

    this.editor.setValue(resumo.conteudo);
  }

}
