import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as moment from 'moment';
import { Toaster } from 'ngx-toast-notifications';
import { DialogoEditaTopicoComponent } from 'src/app/componente/dialogo-edita-topico/dialogo-edita-topico.component';
import { configuracao } from 'src/app/configuracao';
import { ErroService } from 'src/app/core/erro/erro.service';
import { SessaoService } from 'src/app/core/sessao/sessao.service';
import { MateriaCrossFieldErrorMatcher, materiaNaoIdentificadoValidator } from 'src/app/gerenciador-estudos.validators';
import { Cronograma } from 'src/app/servico/cronograma/cronograma';
import { CronogramaService } from 'src/app/servico/cronograma/cronograma.service';
import { MateriaCronograma } from 'src/app/servico/cronograma/materia-cronograma';
import { Materia } from 'src/app/servico/materia/materia';
import { Topico } from 'src/app/servico/topico/topico';
import { TopicoMateriaCronogramaService } from 'src/app/servico/cronograma/topico-materia-cronograma.service';
import { TopicoMateriaCronograma } from 'src/app/servico/cronograma/topico-materia-cronograma';

@Component({
    selector: 'app-tela-edita-cronograma',
    templateUrl: './tela-edita-cronograma.component.html',
    styleUrls: ['./tela-edita-cronograma.component.css']
})
export class TelaEditaCronogramaComponent {
    public formGroup: FormGroup;
    private data: moment.Moment;
    public cronograma = new Cronograma();
    public id = 0;
    value = 'Clear me';
    public exibeErroMateria = new MateriaCrossFieldErrorMatcher();
    constructor(
        private formBuilder: FormBuilder,
        private activatedRoute: ActivatedRoute,
        private cronogramaService: CronogramaService,
        private modalService: NgbModal,
        private sessaoService: SessaoService,
        private erroService: ErroService,
        private toaster: Toaster,
        private router: Router,
        private topicoMateriaCronogramaService: TopicoMateriaCronogramaService
    ) {
        this.formGroup = this.formBuilder.group({
            nome: [null, Validators.compose([Validators.required])],
            materia: [null],

        }, {
            validators: [
                materiaNaoIdentificadoValidator
            ]
        });
        this.activatedRoute.params.subscribe(params => {
            this.id = params[configuracao.parametroId];
            this.id = 69;
            console.log(params);
            if (this.id != null) {
                this.cronogramaService.obtem(this.id.toString()).subscribe(cronograma => {
                    this.cronograma = cronograma;
                    this.paraFormulario();
                });
            } else {
                this.cronogramaService.cria(this.cronograma).subscribe(cronogramaCriado => {
                    this.cronograma = cronogramaCriado;
                    this.router.navigate([], { queryParams: { id: this.cronograma.id } });
                }, (erro: HttpErrorResponse) => {
                    console.log(erro);
                    this.erroService.exibeMensagemErro(erro.error.message, this.toaster);
                });
            }
        });
    }

    get nome(): AbstractControl { return this.formGroup.controls.nome; }
    get materia(): AbstractControl { return this.formGroup.controls.materia; }

    paraFormulario() {
        if (this.cronograma != null) {
            this.nome.setValue(this.cronograma.nome);
        }
    }

    adicionaMateriaCronograma(materia: Materia) {
        if (this.cronograma.listaMateriaCronograma == null) {
            this.cronograma.listaMateriaCronograma = new Array();
        }

        const materiaCronograma = new MateriaCronograma();
        materiaCronograma.materia = materia;
        this.cronograma.listaMateriaCronograma.push(materiaCronograma);
        this.cronogramaService.atualiza(this.cronograma).subscribe(cronogramaAtualizado => {
            this.cronograma = cronogramaAtualizado;
        }, (erro: HttpErrorResponse) => {
            console.log(erro);
            this.erroService.exibeMensagemErro(erro.error.message, this.toaster);
        });
    }

    adicionaTopico(topico: Topico, materiaCronograma: MateriaCronograma) {

        if (materiaCronograma.listaTopicoMateriaCronograma == null) {
            materiaCronograma.listaTopicoMateriaCronograma = new Array();
        }
        const topicoMateriaCronograma = new TopicoMateriaCronograma();
        topicoMateriaCronograma.topico = topico;

        this.topicoMateriaCronogramaService.cria(topicoMateriaCronograma).subscribe(topicoMateriaCronogramaCriado => {
            materiaCronograma.listaTopicoMateriaCronograma.push(topicoMateriaCronograma);

            this.cronograma.listaMateriaCronograma.forEach((materiaLista: MateriaCronograma) => {
                if (materiaLista.id === materiaCronograma.id) {
                    materiaLista = materiaCronograma;
                }
            });

        }, (erro: HttpErrorResponse) => {
            console.log(erro);
            this.erroService.exibeMensagemErro(erro.error.message, this.toaster);
        });
    }

    salva() {
        this.cronograma.nome = this.nome.value;
        this.cronogramaService.atualiza(this.cronograma).subscribe(cronogramaAtualizado => {
            this.cronograma = cronogramaAtualizado;
            this.erroService.exibeMensagemSucesso('Cronograma atualizado com sucesso', this.toaster);
        }, (erro: HttpErrorResponse) => {
            console.log(erro);
            this.erroService.exibeMensagemErro(erro.error.message, this.toaster);
        });
    }
    buscaCronogramaAtualizado(topicoMateria: TopicoMateriaCronograma) {
        this.cronograma.listaMateriaCronograma.forEach((materiaLista: MateriaCronograma) => {
            if (materiaLista != null && materiaLista.listaTopicoMateriaCronograma != null) {
                materiaLista.listaTopicoMateriaCronograma.forEach((topicoMateriaLista: TopicoMateriaCronograma) => {
                    if (topicoMateriaLista.id === topicoMateria.id) {
                        topicoMateriaLista = topicoMateria;
                    }
                });
            }
        });
    }
}

