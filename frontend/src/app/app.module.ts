import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatCheckboxModule, MatDividerModule,
  MatListModule,
  MatSelectModule, MatSidenavModule,
  MatToolbarModule,
  MatCardModule
} from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatRadioModule } from '@angular/material/radio';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatChipsModule} from '@angular/material/chips';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { DiaCalendarioService } from './servico/dia-calendario/dia-calendario.service';
import { DialogoEditaEventoComponent } from './componente/dialogo-edita-evento/dialogo-edita-evento.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { EventoService } from './servico/evento/evento.service';
import { MenuLateralComponent } from './componente/menu-lateral/menu-lateral.component';
import { PainelCalendarioComponent } from './componente/painel/painel-calendario/painel-calendario.component';
import { CalendarioService } from './servico/calendario/calendario.service';
import { SliderCalendarioComponent } from './componente/slider-calendario/slider-calendario.component';
import { EditorTextoComponent } from './componente/editor-texto/editor-texto.component';
import { QuillModule, QUILL_CONFIG_TOKEN } from 'ngx-quill';
import { ResumoService } from './servico/resumo/resumo.service';
import {MatTableModule} from '@angular/material/table';
import { PainelListaResumoComponent } from './componente/painel/painel-lista-resumo/painel-lista-resumo.component';


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
    PainelListaResumoComponent
  ],
  entryComponents: [
    DialogoEditaEventoComponent
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
    QuillModule.forRoot (QUILL_CONFIG_TOKEN.ngInjectableDef),
    MatTableModule
  ],
  providers: [
    DiaCalendarioService,
    EventoService,
    CalendarioService,
    ResumoService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
