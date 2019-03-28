import { AnnonceVenteCreationComponent } from './annonce-vente-creation/annonce-vente-creation.component';
import { CarViewComponent } from './car-view/car-view.component';
import { CarSearchComponent } from './car-search/car-search.component';
import { CarListComponent } from './car-list/car-list.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnnoncesVenteListComponent} from './annonces-vente-list/annonces-vente-list.component';
import { ConnexionComponent} from './connexion/connexion.component';
import { NotificationComponent } from './notification/notification.component';
import { CarCreationComponent } from './car-creation/car-creation.component';
import { CarInterventionsComponent } from './car-interventions/car-interventions.component';
import { AnnoncesInterventionListComponent } from './annonces-intervention-list/annonces-intervention-list.component';
import {ViewUserComponent} from './view-user/view-user.component';
import {VenteVehiculeComponent} from "./vente-vehicule/vente-vehicule.component";

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: CarSearchComponent },
  { path: 'annonces-vente', component: AnnoncesVenteListComponent },
  { path: 'annonces-intervention', component: AnnoncesInterventionListComponent},
  { path: 'connexion', component: ConnexionComponent },
  { path: 'inscription', component: InscriptionComponent },
  { path: 'notification', component: NotificationComponent },
  { path:  'vehicules', component: CarListComponent },
  { path: 'vehicules/new', component: CarCreationComponent},
  {path: 'vehicule/:id', component: CarViewComponent },
  {path: 'annonces-vente/new', component: AnnonceVenteCreationComponent},
  {path: 'profile', component: ViewUserComponent} ,
  { path: 'vehicule/:id/interventions', component: CarInterventionsComponent},
  { path: 'vehicule/:idVehicule/vente-vehicule', component: VenteVehiculeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
