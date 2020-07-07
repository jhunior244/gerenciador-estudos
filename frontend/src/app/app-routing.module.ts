import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { configuracao } from './configuracao';
import { PainelCalendarioComponent } from './componente/painel/painel-calendario/painel-calendario.component';
import { EditorTextoComponent } from './componente/editor-texto/editor-texto.component';
import { PainelListaResumoComponent } from './componente/painel-lista-resumo/painel-lista-resumo.component';


const routes: Routes = [
  { path: configuracao.rotaCalendario, component: PainelCalendarioComponent },
  { path: configuracao.rotaResumoEvento, component: EditorTextoComponent },
  { path: configuracao.rotaListaResumo, component: PainelListaResumoComponent },

  { path: '**', component: PainelCalendarioComponent },
  { path: '', component: PainelCalendarioComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
