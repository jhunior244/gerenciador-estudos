import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-editor-texto',
  templateUrl: './editor-texto.component.html',
  styleUrls: ['./editor-texto.component.css']
})
export class EditorTextoComponent implements OnInit {

  public editorForm: FormGroup;
  public editorContent: string;
  editorStyle = {
    maxHeight: '390px',
    height: '390px',
    backgroundColor: 'white',
    margin: '20px'
  };

  config = {
    toolbar: ['bold', 'italic', 'underline',]
  };

  constructor() {
    this.editorForm = new FormGroup({
      editor: new FormControl(null)
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    this.editorContent = this.editorForm.get('editor').value;
    console.log(this.editorForm.get('editor').value);
  }

  maxLength(event) {
    if (event.editor.getLength() > 25) {
      // event.editor.deleteText(25, event.editor.getLength());
    }
  }

}
