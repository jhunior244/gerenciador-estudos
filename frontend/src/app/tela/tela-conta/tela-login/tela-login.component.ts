import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, AbstractControl, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/core/auth/auth.service';
import { SessaoService } from 'src/app/core/sessao/sessao.service';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/core/usuario/usuario';
import { HttpErrorResponse } from '@angular/common/http';
import { MatSnackBarConfig } from '@angular/material';
import { configuracao } from 'src/app/configuracao';
import { Md5 } from 'ts-md5/dist/md5';

@Component({
  selector: 'app-tela-login',
  templateUrl: './tela-login.component.html',
  styleUrls: ['./tela-login.component.css']
})
export class TelaLoginComponent implements OnInit {

  public formGroup: FormGroup;
  public rotasSistema = configuracao;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private sessaoService: SessaoService,
    private router: Router) { 
    this.formGroup = this.formBuilder.group({
      email: [null, Validators.compose([Validators.required, Validators.email])],
      senha: [null, Validators.required]
    });
  }

  ngOnInit() {
  }

  get email(): AbstractControl { return this.formGroup.controls.email; }
  get senha(): AbstractControl { return this.formGroup.controls.senha; }

  logar() {
    const usuario = new Usuario();
    usuario.email = this.email.value;
    usuario.senha = Md5.hashStr(this.senha.value).toString();
    this.authService.autenticar(usuario).subscribe(resposta => {
      this.router.navigate([configuracao.rotaPainelEstudos]);
    }, (erro: HttpErrorResponse) => {
      console.log(erro);
    });
  }

}
