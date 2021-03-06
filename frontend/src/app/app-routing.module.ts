import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { configuracao } from './configuracao';
import { PainelCalendarioComponent } from './componente/painel/painel-calendario/painel-calendario.component';
import { EditorTextoComponent } from './componente/editor-texto/editor-texto.component';
import { PainelListaResumoComponent } from './componente/painel/painel-lista-resumo/painel-lista-resumo.component';
import { PainelListaCardComponent } from './componente/painel/painel-lista-card/painel-lista-card.component';
import { PainelRevisaCardComponent } from './componente/painel/painel-revisa-card/painel-revisa-card.component';
import { PainelVisualisaEventoComponent } from './componente/painel/painel-visualisa-evento/painel-visualisa-evento.component';
import { TelaInicioComponent } from './tela/tela-inicio/tela-inicio.component';
import { TelaContaComponent } from './tela/tela-conta/tela-conta.component';
import { TelaLoginComponent } from './tela/tela-conta/tela-login/tela-login.component';
import { TelaCadastroComponent } from './tela/tela-conta/tela-cadastro/tela-cadastro.component';
import { TelaEstudosComponent } from './tela/tela-estudos/tela-estudos.component';
import { TelaEditaCronogramaComponent } from './tela/tela-edita-cronograma/tela-edita-cronograma.component';


const routes: Routes = [

  {
    path: configuracao.rotaConta,
    component: TelaContaComponent,
    children: [
      {
        path: '',
        redirectTo: configuracao.rotaLogin,
        pathMatch: 'full'
      }, {
        path: configuracao.rotaLogin,
        component: TelaLoginComponent
      }, {
        path: configuracao.rotaCadastra,
        component: TelaCadastroComponent
      }
    ]
  }, {
    path: configuracao.rotaEditaCronograma,
    component: TelaEditaCronogramaComponent
  }, {
    path: configuracao.rotaEditaCronograma + '/:' + configuracao.parametroId,
    component: TelaEditaCronogramaComponent
  }, {
    path: configuracao.rotaPainelEstudos,
    component: TelaEstudosComponent,
    children: [
      {
        path: '',
        redirectTo: configuracao.rotaCalendario,
        pathMatch: 'full'
      },
      {
        path: configuracao.rotaCalendario,
        component: PainelCalendarioComponent
      }, {
        path: configuracao.rotaVisualizaEvento + '/:' + configuracao.parametroId,
        component: PainelVisualisaEventoComponent,
      }, {
        path: configuracao.rotaListaCard + '/:' + configuracao.parametroId,
        component: PainelListaCardComponent
      }, {
        path: configuracao.rotaRevisaCard + '/:' + configuracao.parametroId,
        component: PainelRevisaCardComponent
      }, {
        path: configuracao.rotaListaResumo + '/:' + configuracao.parametroId,
        component: PainelListaResumoComponent
      }, {
        path: configuracao.rotaResumoEvento,
        component: EditorTextoComponent
      }, {
        path: configuracao.rotaResumoEvento + '/:' + configuracao.parametroId,
        component: EditorTextoComponent
      }, {
        path: configuracao.rotaResumoEvento + '/:' + configuracao.parametroId,
        component: EditorTextoComponent
      }
    ]
  },

  { path: configuracao.rotaInicio, component: TelaInicioComponent },

  { path: '**', redirectTo: configuracao.rotaInicio, pathMatch: 'full', },
  { path: '', component: TelaInicioComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
