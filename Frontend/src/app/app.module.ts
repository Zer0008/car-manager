import { MatListModule } from '@angular/material/list';
import { MatDialogModule, MatRadioModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { PubComponent } from './pub/pub.component';
import { AnnoncesVenteListComponent } from './annonces-vente-list/annonces-vente-list.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { NotificationComponent } from './notification/notification.component';
import { AnnoncesInterventionListComponent } from './annonces-intervention-list/annonces-intervention-list.component';
import { CarSearchComponent } from './car-search/car-search.component';
import { TechnicalSetViewComponent } from './technical-set-view/technical-set-view.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CarInterventionsComponent } from './car-interventions/car-interventions.component';
import { CarListComponent } from './car-list/car-list.component';
import { CarCreationComponent } from './car-creation/car-creation.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CarViewComponent } from './car-view/car-view.component';
import { FileSelectDirective } from 'ng2-file-upload';
import { ViewUserComponent } from './view-user/view-user.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { VenteVehiculeComponent } from './vente-vehicule/vente-vehicule.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { AnnonceVenteCreationComponent } from './annonce-vente-creation/annonce-vente-creation.component';

@NgModule({
  declarations: [
    AppComponent,
    PubComponent,
    AnnoncesVenteListComponent,
    ConnexionComponent,
    InscriptionComponent,
    NotificationComponent,
    AnnoncesInterventionListComponent,
    CarSearchComponent,
    TechnicalSetViewComponent,
    NavbarComponent,
    CarInterventionsComponent,
    CarListComponent,
    CarCreationComponent,
    CarViewComponent,
    FileSelectDirective,
    ViewUserComponent,
    VenteVehiculeComponent,
    AnnonceVenteCreationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatListModule,
    MatDialogModule,
    MatRadioModule,
    PdfViewerModule,
    MatProgressSpinnerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
