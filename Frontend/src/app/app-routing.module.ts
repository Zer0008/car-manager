import { VenteVehiculeComponent } from './vente-vehicule/vente-vehicule.component';
import { AnnonceInterventionCreationComponent } from './annonce-intervention-creation/annonce-intervention-creation.component';
import { AuthGuard } from './guards/auth.guard';
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

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: CarSearchComponent },
  { path: 'annonces-vente', component: AnnoncesVenteListComponent },
  { path: 'vehicule/:id/request-annonce-intervention', component: AnnonceInterventionCreationComponent},
  { path: 'annonces-intervention', component: AnnoncesInterventionListComponent},
  { path: 'connexion', component: ConnexionComponent },
  { path: 'inscription', component: InscriptionComponent },
  { path: 'notification', component: NotificationComponent, canActivate: [AuthGuard] },
  { path:  'vehicules', component: CarListComponent, canActivate: [AuthGuard] },
  { path: 'vehicules/new', component: CarCreationComponent, canActivate: [AuthGuard]},
  {path: 'vehicule/:id', component: CarViewComponent, canActivate: [AuthGuard] },
  {path: 'vehicule/:id/vente', component: VenteVehiculeComponent, canActivate: [AuthGuard] },
  {path: 'vehicule/:id/request-annonce-vente', component: AnnonceVenteCreationComponent, canActivate: [AuthGuard]},
  {path: 'profile', component: ViewUserComponent, canActivate: [AuthGuard]} ,
  { path: 'vehicule/:id/interventions', component: CarInterventionsComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
