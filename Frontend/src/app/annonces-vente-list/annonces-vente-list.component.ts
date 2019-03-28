import { vehicule } from './../models/Voiture';
import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-annonces-vente-list',
  templateUrl: './annonces-vente-list.component.html',
  styleUrls: ['./annonces-vente-list.component.css']
})
export class AnnoncesVenteListComponent implements OnInit {
  AnnonceCurrent: any;
  Annoncesvehicule = [

    {
      idVehicule: '1',
      immatriculation: '',
      libelleVoiture: '',
      marqueVoiture: 'Peugeot',
      modeleVoiture: '3008',
      anneeCirculation: '2018',
      finition: '1.6 HDi 110ch FAP Business Pack',
      justificatif: '',
      kilometrage: '18 000 Km',
      photo: '../../assets/images/peugeot_3008_galerie-8-1.68703.19.jpg',
      moteur: '',
      carburant: 'Diesel',
      transmission: '',
      mesure: '',
      boiteVitesse: '',
      status: 'En vente',
      visibilite: '1',
      isActive: '0',
      prix: '19 500',
      ville: 'Nantes (44000)'
    },

    {
      idVehicule: '2',
      immatriculation: '',
      libelleVoiture: '',
      marqueVoiture: 'Peugeot',
      modeleVoiture: '508 SW',
      anneeCirculation: '2016',
      finition: '(2) SW 2.0 BLUE HDI 150 S&S GT LINE',
      justificatif: '',
      kilometrage: '56 000 Km',
      photo: `../../assets/images/logo_690x405_turbo_swhybrid.png`,
      moteur: '',
      carburant: 'Essence',
      transmission: '',
      mesure: '',
      boiteVitesse: '',
      status: 'En vente',
      visibilite: '1',
      isActive: '0',
      prix: '16 500',
      ville: 'Limoges (87000)'
    },

    {
      idVehicule: '0',
      immatriculation: '',
      libelleVoiture: '',
      marqueVoiture: 'BMW',
      modeleVoiture: 'SERIE 6 F13',
      anneeCirculation: '2012',
      finition: '(F13) COUPE 65I XDRIVE 407',
      justificatif: '',
      kilometrage: '60 000 Km',
      photo: '../../assets/images/BMW-Serie-6-F12-F13-F06-1.jpeg',
      moteur: '',
      carburant: 'Essence',
      transmission: '',
      mesure: '',
      boiteVitesse: '',
      status: 'En vente',
      visibilite: '1',
      isActive: '0',
      prix: '38 900',
      ville: 'Limoges (87000)'
    }

  ];

  constructor() {
    this.AnnonceCurrent = this.Annoncesvehicule;
   }

  onSearch(modele: string, marque: string, carburant: string) {
      if (marque === 'Indifferent' || modele === 'Indifferent' || carburant === 'Indifferent') {
        this.AnnonceCurrent = this.Annoncesvehicule;
      }
      if (marque !== 'Indifferent') {
        this.AnnonceCurrent = _.filter(this.AnnonceCurrent, ['marqueVoiture', marque]);
      }
      if (modele !== 'Indifferent') {
       this.AnnonceCurrent = _.filter(this.AnnonceCurrent, ['modeleVoiture', modele]);
      }
      if (carburant !== 'Indifferent') {
       this.AnnonceCurrent = _.filter(this.AnnonceCurrent, ['carburant', carburant]);
      }
      console.log(this.AnnonceCurrent);
  }

  ngOnInit() {
  }

}
