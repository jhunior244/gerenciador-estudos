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


@NgModule({
  declarations: [
    AppComponent,
    DialogoEditaEventoComponent
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
    
  ],
  providers: [
    DiaCalendarioService,
    EventoService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
