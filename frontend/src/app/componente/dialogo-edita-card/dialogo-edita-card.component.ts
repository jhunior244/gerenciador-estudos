import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Card } from 'src/app/servico/card/card';
import { CardService } from 'src/app/servico/card/card.service';
import { Evento } from 'src/app/servico/evento/evento';

@Component({
  selector: 'app-dialogo-edita-card',
  templateUrl: './dialogo-edita-card.component.html',
  styleUrls: ['./dialogo-edita-card.component.css']
})
export class DialogoEditaCardComponent implements OnInit {

  @Output() resumoCriadoOuAtualizado = new EventEmitter<void>();
  @Input() card: Card;
  @Input() evento: Evento;
  public formGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    public activeModal: NgbActiveModal,
    private cardService: CardService
  ) {
    this.formGroup = this.formBuilder.group({
      textoFrente: [null, Validators.compose([Validators.required])],
      textoTras: [null, Validators.compose([Validators.required])],
    });
  }

  get textoFrente(): AbstractControl { return this.formGroup.controls.textoFrente; }
  get textoTras(): AbstractControl { return this.formGroup.controls.textoTras; }

  ngOnInit() {
    this.preencheFormulario();
  }

  formularioParaEntidade() {
    if (this.card == null) {
      this.card = new Card();
    }
    this.card.textoFrente = this.textoFrente.value;
    this.card.textoTras = this.textoTras.value;
    this.card.evento = this.evento;
  }

  salva() {
    this.formularioParaEntidade();
    if (this.card && this.card.id) {
      this.cardService.atualiza(this.card).subscribe(card => {
        this.activeModal.close('Close click');
        this.resumoCriadoOuAtualizado.emit();
      });
    } else {
      this.cardService.cria(this.card).subscribe(card => {
        this.activeModal.close('Close click');
        this.resumoCriadoOuAtualizado.emit();
      });
    }
  }

  preencheFormulario() {
    if (this.card != null) {
      this.textoFrente.setValue(this.card.textoFrente);
      this.textoTras.setValue(this.card.textoTras);
    }
  }
}
