import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent} from './app.component';
//import {  DialogContentExampleDialog} from './car-search/car-search.component';
import { HomeComponent } from './home/home.component';
import { PubComponent } from './pub/pub.component';
import { AnnoncesVenteListComponent } from './annonces-vente-list/annonces-vente-list.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { NotificationComponent } from './notification/notification.component';
import { AnnoncesInterventionListComponent } from './annonces-intervention-list/annonces-intervention-list.component';
import { CarSearchComponent } from './car-search/car-search.component';
import { TechnicalSetViewComponent } from './technical-set-view/technical-set-view.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from "@angular/material";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatRadioModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PubComponent,
    AnnoncesVenteListComponent,
    ConnexionComponent,
    InscriptionComponent,
    NotificationComponent,
    AnnoncesInterventionListComponent,
    CarSearchComponent,
    TechnicalSetViewComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatRadioModule
  ],
  providers: [],
  entryComponents: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
