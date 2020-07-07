import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Resumo } from 'src/app/servico/resumo/resumo';
import { ResumoService } from 'src/app/servico/resumo/resumo.service';

@Component({
  selector: 'app-editor-texto',
  templateUrl: './editor-texto.component.html',
  styleUrls: ['./editor-texto.component.css']
})
export class EditorTextoComponent implements OnInit {

  public editorForm: FormGroup;
  public resumo: Resumo;
  public editorContent: string;
  editorStyle = {
    maxHeight: '390px',
    height: '390px',
    backgroundColor: 'white',
    margin: '20px'
  };

  config = {
    toolbar: ['bold', 'italic', 'underline']
  };

  constructor(
    private resumoService: ResumoService
  ) {
    this.editorForm = new FormGroup({
      editor: new FormControl(null)
    });
    this.editorForm.get('editor').setValue('<p>dsfsdfdsfsdfsdf</p><p>dsfsdfdsfsdfsdf</p>');
  }

  ngOnInit() {
  }

  onSubmit() {
    if (this.resumo == null) {
      this.resumo = new Resumo();
    }
    this.resumo.titulo = 'Titulo teste';
    this.resumo.conteudo = this.editorForm.get('editor').value;
    this.resumoService.cria(this.resumo).subscribe(resumoCriado => {
      this.resumo = this.resumo;
      console.log(this.resumo);
    });


    this.editorContent = this.editorForm.get('editor').value;
    console.log(this.editorForm.get('editor').value);
  }

  maxLength(event) {
    if (event.editor.getLength() > 25) {
      // event.editor.deleteText(25, event.editor.getLength());
    }
  }

}
