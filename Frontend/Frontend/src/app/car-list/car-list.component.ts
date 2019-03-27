import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {
  vehicules: any[];
  constructor(private route: Router) { }

  ngOnInit() {
    this.vehicules = [

      {
        idVehicule: '1',
        immatriculation: 'SDR-123-SCD',
        libelleVoiture: 'Voiture de Jean',
        marqueVoiture: 'Peugeot',
        modeleVoiture: '3008',
        anneeCirculation: '2018',
        finition: '1.6 HDi 110ch FAP Business Pack',
        justificatif: '',
        photo: '../../assets/images/peugeot_3008_galerie-8-1.68703.19.jpg',
        moteur: '',
        carburant: 'Diesel',
        transmission: '',
        mesure: '',
        boiteVitesse: '',
        status: 'En vente',
        visibilite: '1',
        isActive: '0',
        ville: 'Nantes (44000)'
      },
      {
        idVehicule: '2',
        immatriculation: 'SDR-AZE-234',
        libelleVoiture: 'Voiture de Paul',
        marqueVoiture: 'Peugeot',
        modeleVoiture: '508 SW',
        anneeCirculation: '2016',
        finition: '(2) SW 2.0 BLUE HDI 150 S&S GT LINE',
        photo: `../../assets/images/logo_690x405_turbo_swhybrid.png`,
        moteur: '',
        carburant: 'Essence',
        transmission: '',
        mesure: '',
        boiteVitesse: '',
        status: 'En vente',
        visibilite: '1',
        isActive: '0',
        ville: 'Limoges (87000)'
      },
      {
        idVehicule: '0',
        immatriculation: 'XYZ-123-34',
        libelleVoiture: 'Voiture de Marcel',
        marqueVoiture: 'BMW',
        modeleVoiture: 'SERIE 6 F13',
        anneeCirculation: '2012',
        finition: '(F13) COUPE 65I XDRIVE 407',
        justificatif: '',
        photo: '../../assets/images/BMW-Serie-6-F12-F13-F06-1.jpeg',
        moteur: '',
        carburant: 'Essence',
        transmission: '',
        mesure: '',
        boiteVitesse: '',
        status: 'En vente',
        visibilite: '1',
        isActive: '0',
        ville: 'Limoges (87000)'
      }
    ];
  }
  
  addCar(): void {
    this.route.navigateByUrl('/vehicules/new');
  }

  deleteCar(vehicule: any): void {
      this.vehicules.splice(this.vehicules.indexOf(vehicule), 1);
  }

}
