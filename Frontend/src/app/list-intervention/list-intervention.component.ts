import { Component, OnInit } from '@angular/core';
import { Intervention } from '../models/intervention';

@Component({
  selector: 'app-list-intervention',
  templateUrl: './list-intervention.component.html',
  styleUrls: ['./list-intervention.component.css']
})
export class ListInterventionComponent implements OnInit {

  //Attributs

  interventions: Array<Intervention> = [];
  AncienInterventions: Array<Intervention> = [];

  constructor() { }

  ngOnInit() {

    this.interventions = [
      {
        id:   1,
        nom: 'Remplacement des bougies de préchauffage'
      },
      {
        id:   2,
        nom: 'Nouveau balai d\'essuie-glace'
      },
      {
        id:   3,
        nom: 'Amortisseur avant gauche réparé'
      }
    ];

    this.AncienInterventions = [
      {
        id:   1,
        nom: 'Remplacement de pare-brise'
      },
      {
        id:   2,
        nom: 'Fil électrique rompu'
      }
    ];

  }
}
