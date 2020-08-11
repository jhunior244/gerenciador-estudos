import { ScrollingModule } from '@angular/cdk/scrolling';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatCardModule, MatCheckboxModule, MatDividerModule,
  MatListModule,
  MatSelectModule, MatSidenavModule,
  MatToolbarModule
} from '@angular/material';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatRadioModule } from '@angular/material/radio';
import { MatTableModule } from '@angular/material/table';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { QuillModule, QUILL_CONFIG_TOKEN } from 'ngx-quill';
import { ToastNotificationsModule } from 'ngx-toast-notifications';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AutoCompleteMateriaComponent } from './componente/auto-complete-materia/auto-complete-materia.component';
import { BarraMenuComponent } from './componente/barra-menu/barra-menu.component';
import { DialogoEditaCardComponent } from './componente/dialogo-edita-card/dialogo-edita-card.component';
import { DialogoEditaEventoComponent } from './componente/dialogo-edita-evento/dialogo-edita-evento.component';
import { EditorTextoComponent } from './componente/editor-texto/editor-texto.component';
import { MenuLateralComponent } from './componente/menu-lateral/menu-lateral.component';
import { PainelCalendarioComponent } from './componente/painel/painel-calendario/painel-calendario.component';
import { PainelEditaEventoComponent } from './componente/painel/painel-edita-evento/painel-edita-evento.component';
import { PainelListaCardComponent } from './componente/painel/painel-lista-card/painel-lista-card.component';
import { PainelListaResumoComponent } from './componente/painel/painel-lista-resumo/painel-lista-resumo.component';
import { PainelRevisaCardComponent } from './componente/painel/painel-revisa-card/painel-revisa-card.component';
import { PainelVisualisaEventoComponent } from './componente/painel/painel-visualisa-evento/painel-visualisa-evento.component';
import { SliderCalendarioComponent } from './componente/slider-calendario/slider-calendario.component';
import { ErroInterceptor, RequestInterceptor } from './core/auth/request.interceptor';
import { ErroService } from './core/erro/erro.service';
import { CalendarioService } from './servico/calendario/calendario.service';
import { CronogramaService } from './servico/cronograma/cronograma.service';
import { DiaCalendarioService } from './servico/dia-calendario/dia-calendario.service';
import { EventoService } from './servico/evento/evento.service';
import { ResumoService } from './servico/resumo/resumo.service';
import { TelaCadastroComponent } from './tela/tela-conta/tela-cadastro/tela-cadastro.component';
import { TelaContaComponent } from './tela/tela-conta/tela-conta.component';
import { TelaLoginComponent } from './tela/tela-conta/tela-login/tela-login.component';
import { TelaEditaCronogramaComponent } from './tela/tela-edita-cronograma/tela-edita-cronograma.component';
import { TelaEstudosComponent } from './tela/tela-estudos/tela-estudos.component';
import { TelaInicioComponent } from './tela/tela-inicio/tela-inicio.component';
import { MateriaService } from './servico/materia/materia.service';
import {MatExpansionModule} from '@angular/material/expansion';
import { DialogoEditaTopicoComponent } from './componente/dialogo-edita-topico/dialogo-edita-topico.component';
import { TopicoService } from './servico/topico/topico.service';
import { AutoCompleteTopicoComponent } from './componente/auto-complete-topico/auto-complete-topico.component';
import { TopicoMateriaCronogramaService } from './servico/cronograma/topico-materia-cronograma.service';
import { EditorTopicoMateriaCronogramaComponent } from './componente/editor-topico-materia-cronograma/editor-topico-materia-cronograma.component';
@NgModule({
  declarations: [
    AppComponent,
    DialogoEditaEventoComponent,
    MenuLateralComponent,
    PainelCalendarioComponent,
    SliderCalendarioComponent,
    MenuLateralComponent,
    SliderCalendarioComponent,
    PainelCalendarioComponent,
    EditorTextoComponent,
    PainelListaResumoComponent,
    PainelVisualisaEventoComponent,
    DialogoEditaCardComponent,
    PainelListaCardComponent,
    PainelRevisaCardComponent,
    PainelEditaEventoComponent,
    TelaInicioComponent,
    BarraMenuComponent,
    TelaLoginComponent,
    TelaCadastroComponent,
    TelaContaComponent,
    TelaEstudosComponent,
    TelaEditaCronogramaComponent,
    AutoCompleteMateriaComponent,
    DialogoEditaTopicoComponent,
    AutoCompleteTopicoComponent,
    EditorTopicoMateriaCronogramaComponent
  ],
  entryComponents: [
    DialogoEditaEventoComponent,
    DialogoEditaTopicoComponent,
    DialogoEditaCardComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatDividerModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSelectModule,
    MatCardModule,
    MatChipsModule,
    ScrollingModule,
    NgbModule,
    QuillModule.forRoot(QUILL_CONFIG_TOKEN.ngInjectableDef),
    MatTableModule,
    ToastNotificationsModule,
    MatAutocompleteModule,
    MatExpansionModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptor,
      multi: true
    }, {
      provide: HTTP_INTERCEPTORS,
      useClass: ErroInterceptor,
      multi: true
    },
    DiaCalendarioService,
    EventoService,
    CalendarioService,
    ResumoService,
    ErroService,
    CronogramaService,
    MateriaService,
    TopicoService,
    TopicoMateriaCronogramaService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
