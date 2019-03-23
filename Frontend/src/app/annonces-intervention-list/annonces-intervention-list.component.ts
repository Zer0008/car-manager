import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-annonces-intervention-list',
  templateUrl: './annonces-intervention-list.component.html',
  styleUrls: ['./annonces-intervention-list.component.css']
})
export class AnnoncesInterventionListComponent implements OnInit {
    Intervention: any;
   panne = [
    {
      idVehicule: 'toto',
      marqueVoiture: 'Peugeot',
      modeleVoiture: 'SUV',
      finition: '1.6 HDi 110ch FAP Business Pack',
      ville: 'Limoges',
      codePostale: 87000,
        datePublication	: '12-03-2018',
        libelleAnnonce : 'blocage du volant',
        descriptifAnnonce: 'Lorsque je tourne le volant vers la droite il durcit et se bloque'
    },

    {
      idVehicule: 'tata',
      marqueVoiture: 'Mercedes',
      modeleVoiture: '4x4',
      finition: '1.6 HDi 110ch FAP Business Pack',
      ville: 'Argenteuil',
        codePostale: 92500,
        datePublication	: '18-07-2016',
        libelleAnnonce : 'le levier de vitesse ',
        descriptifAnnonce: 'J ai de la peine à passer en marche arrière quand je conduits'
    },
       {
           idVehicule: '3',
           marqueVoiture: 'Citroen',
           modeleVoiture: 'Citadine',
           finition: '1.6 HDi 110ch FAP Business Pack',
           ville: 'Levallois',
           codePostale: 92300,
           datePublication	: '12-03-2018',
           libelleAnnonce : 'blocage du volant',
           descriptifAnnonce: 'Lorsque je tourne le volant vers la droite il durcit et se bloque'
       }

  ];

  constructor() {
      this.Intervention = this.panne;
  }

    onSearch(marque: string, modele: string, lieu: string) {
      lieu = lieu.replace(" ","");
      lieu= lieu.charAt(0).toUpperCase() + lieu.substring(1).toLowerCase();
        if (marque === 'Indifferent' || modele === 'Indifferent' || lieu === '') {
            this.Intervention = this.panne;
        }

        if (marque !== 'Indifferent') {
            this.Intervention = _.filter(this.Intervention, ['marqueVoiture', marque]);
        }
        if (modele !== 'Indifferent') {
            this.Intervention = _.filter(this.Intervention, ['modeleVoiture', modele]);
        }
        if (lieu !== '') {
            console.log(Number(lieu));
            if(!isNaN(Number(lieu))){
                const lieunb = Number(lieu) ;
                this.Intervention = _.filter(this.Intervention, ['codePostale', lieunb]);
            }
            else{
                this.Intervention = _.filter(this.Intervention, ['ville', lieu]);
            }
            console.log('la valeur de lieu1: ' + lieu);
        }
        console.log(this.Intervention);
    }

  ngOnInit() { }

}
