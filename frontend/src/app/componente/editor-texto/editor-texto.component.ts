import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, AbstractControl, Validators } from '@angular/forms';
import { Resumo } from 'src/app/servico/resumo/resumo';
import { ResumoService } from 'src/app/servico/resumo/resumo.service';
import { ActivatedRoute } from '@angular/router';
import { configuracao } from 'src/app/configuracao';
import { forkJoin } from 'rxjs';
import { EventoService } from 'src/app/servico/evento/evento.service';
import { Evento } from 'src/app/servico/evento/evento';
import { ContentChange } from 'ngx-quill';

@Component({
  selector: 'app-editor-texto',
  templateUrl: './editor-texto.component.html',
  styleUrls: ['./editor-texto.component.css']
})
export class EditorTextoComponent implements OnInit {

  public editorForm: FormGroup;
  public resumo: Resumo;
  public evento: Evento;
  public editorContent: string;
  private id: string;
  private idEvento: string;
  editorStyle = {
    maxHeight: '900px',
    minheight: '80%',
    backgroundColor: 'white',
    margin: '20px'
  };

  config = {
    toolbar: ['bold', 'italic', 'underline']
  };

  constructor(
    private activatedRoute: ActivatedRoute,
    private resumoService: ResumoService,
    private eventoService: EventoService,
    private formBuilder: FormBuilder
  ) {
    this.editorForm = formBuilder.group({
      editor: [null, Validators.required]
    });

    this.activatedRoute.queryParams.subscribe(queryParams => {
      this.id = queryParams.id;
      this.idEvento = queryParams.idEvento;
      if (this.id != null && this.idEvento != null) {
        const resumo$ = this.resumoService.obtem(this.id);
        const evento$ = this.eventoService.obtem(this.idEvento);
        forkJoin([resumo$, evento$]).subscribe(resultados => {
          this.resumo = resultados[0];
          this.evento = resultados[1];
          this.setConteudoResumo(this.resumo);
        });
      }
    });
  }

  get editor(): AbstractControl { return this.editorForm.controls.editor; }

  ngOnInit() {
  }

  onSubmit() {
    if (this.resumo == null) {
      this.resumo = new Resumo();
    }
    this.resumo.titulo = 'Titulo teste';
    this.resumo.conteudo = this.editorForm.get('editor').value;
    this.resumo.evento = this.evento;
    this.resumoService.cria(this.resumo).subscribe(resumoCriado => {
      this.resumo = this.resumo;
    });


    this.editorContent = this.editorForm.get('editor').value;
  }

  maxLength(event: ContentChange) {
    if (event.text.length > 25000) {
      event.text.substring(0, 25000);
      console.log(event.text.length);
      // event.editor.deleteText(150, event.editor.getLength());


      // let teste: string = this.editor.value;
      // teste = teste.substring(0, 1500);
      // this.editor.setValue(teste);
    }
  }

  setConteudoResumo(resumo: Resumo) {
    if (resumo == null) {
      return;
    }

    this.editor.setValue(resumo.conteudo);
  }

}
