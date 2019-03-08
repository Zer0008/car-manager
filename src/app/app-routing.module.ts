import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent} from "./home/home.component";
import { AnnoncesVenteListComponent} from "./annonces-vente-list/annonces-vente-list.component";
import { ConnexionComponent} from "./connexion/connexion.component";
import { AnnoncesInterventionListComponent} from "./annonces-intervention-list/annonces-intervention-list.component";

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'annonces-vente', component: AnnoncesVenteListComponent },
  { path: 'connexion', component: ConnexionComponent },
  { path: 'annonces-intervention', component: AnnoncesInterventionListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
