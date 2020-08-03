import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, FormArray } from '@angular/forms';
import * as moment from 'moment';
import { Cronograma } from 'src/app/servico/cronograma/cronograma';
import { Router, ActivatedRoute } from '@angular/router';
import { configuracao } from 'src/app/configuracao';
import { CronogramaService } from 'src/app/servico/cronograma/cronograma.service';
import { Materia } from 'src/app/servico/materia/materia';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DialogoEditaTopicoComponent } from 'src/app/componente/dialogo-edita-topico/dialogo-edita-topico.component';
import { Topico } from 'src/app/servico/topico/topico';
import { SessaoService } from 'src/app/core/sessao/sessao.service';
import { ErroService } from 'src/app/core/erro/erro.service';
import { Toaster } from 'ngx-toast-notifications';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
    selector: 'app-tela-edita-cronograma',
    templateUrl: './tela-edita-cronograma.component.html',
    styleUrls: ['./tela-edita-cronograma.component.css']
})
export class TelaEditaCronogramaComponent {
    public formGroup: FormGroup;
    private data: moment.Moment;
    public cronograma = new Cronograma();
    public id: string;
    value = 'Clear me';
    constructor(
        private formBuilder: FormBuilder,
        private activatedRoute: ActivatedRoute,
        private cronogramaService: CronogramaService,
        private modalService: NgbModal,
        private sessaoService: SessaoService,
        private erroService: ErroService,
        private toaster: Toaster
    ) {
        this.formGroup = this.formBuilder.group({
            nome: [null, Validators.compose([Validators.required])],
            materia: [null],

        });
        this.activatedRoute.params.subscribe(params => {
            this.id = params[configuracao.parametroId];

            if (this.id != null) {
                this.cronogramaService.obtem(this.id).subscribe(cronograma => {
                    this.cronograma = cronograma;
                });
            }
        });
    }

    get nome(): AbstractControl { return this.formGroup.controls.nome; }
    get materia(): AbstractControl { return this.formGroup.controls.materia; }

    adicionaMateria(materia: Materia) {
        if (this.cronograma.listaMateria == null) {
            this.cronograma.listaMateria = new Array();
        }
        this.cronograma.listaMateria.push(materia);
    }

    adicionaTopico(materia: Materia) {
        const modalRef = this.modalService.open(DialogoEditaTopicoComponent);
        modalRef.componentInstance.materia = materia;
        modalRef.componentInstance.topicoCriadoOuAtualizado.subscribe((materiaAnunciada: Materia) => {
            console.log(materiaAnunciada);
            this.cronograma.listaMateria.forEach((materiaLista: Materia) => {
                if (materiaLista.id === materiaAnunciada.id) {
                    materiaLista = materiaAnunciada;
                }
            });

        }, (erro: HttpErrorResponse) => {
            console.log(erro);
            this.erroService.exibeMensagemErro(erro.error.message, this.toaster);
        });
    }
}

