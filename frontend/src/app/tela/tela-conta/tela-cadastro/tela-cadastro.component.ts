import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { configuracao } from 'src/app/configuracao';
import { AuthService } from 'src/app/core/auth/auth.service';
import { SessaoService } from 'src/app/core/sessao/sessao.service';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/core/usuario/usuario';
import { Md5 } from 'ts-md5';
import { UsuarioService } from 'src/app/core/usuario/usuario.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-tela-cadastro',
  templateUrl: './tela-cadastro.component.html',
  styleUrls: ['./tela-cadastro.component.css']
})
export class TelaCadastroComponent implements OnInit {

  public formGroup: FormGroup;
  public rotasSistema = configuracao;
  public usuario = new Usuario();

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private sessaoService: SessaoService,
    private router: Router,
    private usuarioService: UsuarioService) { 
    this.formGroup = this.formBuilder.group({
      nome: [null, Validators.required],
      email: [null, Validators.compose([Validators.required, Validators.email])],
      senha: [null, Validators.required]
    });
  }

  get nome(): AbstractControl { return this.formGroup.controls.nome; }
  get email(): AbstractControl { return this.formGroup.controls.email; }
  get senha(): AbstractControl { return this.formGroup.controls.senha; }

  ngOnInit() {
  }

  formularioParaEntidade() {
      this.usuario.nome = this.nome.value;
      this.usuario.email = this.email.value;
      this.usuario.senha = Md5.hashStr(this.senha.value).toString();
  }

  cadastrar() {
    this.formularioParaEntidade();
    this.usuarioService.cria(this.usuario).subscribe(() => {
        this.authService.autenticar(this.usuario).subscribe(retorno => {
            this.router.navigate([configuracao.rotaPainelEstudos]);
        }, (erro: HttpErrorResponse) => {
            console.log(erro);
        });
    }, (erro: HttpErrorResponse) => {
        console.log(erro);
    });
}

}
