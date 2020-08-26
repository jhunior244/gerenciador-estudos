import { Component, OnInit } from '@angular/core';
import { configuracao } from 'src/app/configuracao';
import { CronogramaService } from 'src/app/servico/cronograma/cronograma.service';
import { FormGroup, FormBuilder, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-menu-lateral',
  templateUrl: './menu-lateral.component.html',
  styleUrls: ['./menu-lateral.component.css']
})
export class MenuLateralComponent implements OnInit {

  public formGroup: FormGroup;
  public rotaListaResumo = configuracao.rotaListaResumo;

  constructor(
    private cronogramaService: CronogramaService,
    private formBuilder: FormBuilder
  ) {
    this.formGroup = this.formBuilder.group({
      cronograma: [null]
    });
    this.cronogramaService.lista().subscribe(lista => {
      console.log(lista);
    });
  }

  get cronograma(): AbstractControl { return this.formGroup.controls.cronograma; }
  ngOnInit() {

  }

}
