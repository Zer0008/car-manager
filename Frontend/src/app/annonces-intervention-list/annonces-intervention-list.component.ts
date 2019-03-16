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
      idVehicule: '1',
      marqueVoiture: 'Peugeot',
      modeleVoiture: 'SUV',
      finition: '1.6 HDi 110ch FAP Business Pack',
      ville: 'Limoges',
      codePostale: 87000
    },

    {
      idVehicule: '2',
      marqueVoiture: 'Mercedes',
      modeleVoiture: '4x4',
      finition: '1.6 HDi 110ch FAP Business Pack',
      ville: 'Argenteuil',
        codePostale: 92500
    },
       {
           idVehicule: '3',
           marqueVoiture: 'Citroen',
           modeleVoiture: 'Citadine',
           finition: '1.6 HDi 110ch FAP Business Pack',
           ville: 'Levallois',
           codePostale: 92300
       }

  ];

  constructor() {
      this.Intervention = this.panne;
  }

    onSearch(marque: string, modele: string, lieu: string) {

        if (marque !== 'Indifferent') {
            this.Intervention = _.filter(this.Intervention, ['marqueVoiture', marque]);
        }
        if (modele !== 'Indifferent') {
            this.Intervention = _.filter(this.Intervention, ['modeleVoiture', modele]);
        }
        if (lieu !== " ") {
            this.Intervention = _.filter(this.Intervention, ['ville', lieu]);
        }
        console.log(this.Intervention);
    }

  ngOnInit() { }

}
