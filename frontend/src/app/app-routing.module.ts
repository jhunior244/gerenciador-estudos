import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { configuracao } from './configuracao';
import { PainelCalendarioComponent } from './componente/painel/painel-calendario/painel-calendario.component';
import { EditorTextoComponent } from './componente/editor-texto/editor-texto.component';
import { PainelListaResumoComponent } from './componente/painel/painel-lista-resumo/painel-lista-resumo.component';
import { PainelListaCardComponent } from './componente/painel/painel-lista-card/painel-lista-card.component';
import { PainelRevisaCardComponent } from './componente/painel/painel-revisa-card/painel-revisa-card.component';
import { PainelVisualisaEventoComponent } from './componente/painel/painel-visualisa-evento/painel-visualisa-evento.component';


const routes: Routes = [
  { path: configuracao.rotaCalendario, component: PainelCalendarioComponent },
  { path: configuracao.rotaResumoEvento, component: EditorTextoComponent },
  { path: configuracao.rotaResumoEvento, component: EditorTextoComponent },
  { path: configuracao.rotaListaResumo + '/:' + configuracao.parametroId, component: PainelListaResumoComponent },
  { path: configuracao.rotaListaCard + '/:' + configuracao.parametroId, component: PainelListaCardComponent },
  { path: configuracao.rotaRevisaCard + '/:' + configuracao.parametroId, component: PainelRevisaCardComponent },
  { path: configuracao.rotaVisualizaEvento + '/:' + configuracao.parametroId, component: PainelVisualisaEventoComponent },

  { path: '**', component: PainelCalendarioComponent },
  { path: '', redirectTo: '/calendario', pathMatch : 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
