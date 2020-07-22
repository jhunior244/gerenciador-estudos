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


const routes: Routes = [

  {
    path: configuracao.rotaConta,
    component: TelaContaComponent,
    children: [
      {
        path: configuracao.rotaLogin,
        component: TelaLoginComponent
      }, {
        path: configuracao.rotaCadastra,
        component: TelaCadastroComponent
      }
    ]
  },

  { path: configuracao.rotaCalendario, component: PainelCalendarioComponent },
  { path: configuracao.rotaResumoEvento, component: EditorTextoComponent },
  { path: configuracao.rotaResumoEvento, component: EditorTextoComponent },
  { path: configuracao.rotaListaResumo + '/:' + configuracao.parametroId, component: PainelListaResumoComponent },
  { path: configuracao.rotaListaCard + '/:' + configuracao.parametroId, component: PainelListaCardComponent },
  { path: configuracao.rotaRevisaCard + '/:' + configuracao.parametroId, component: PainelRevisaCardComponent },
  { path: configuracao.rotaVisualizaEvento + '/:' + configuracao.parametroId, component: PainelVisualisaEventoComponent },
  { path: configuracao.rotaInicio, component: TelaInicioComponent },

  { path: '**', redirectTo: configuracao.rotaInicio, pathMatch: 'full', },
  { path: '', component: TelaInicioComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
