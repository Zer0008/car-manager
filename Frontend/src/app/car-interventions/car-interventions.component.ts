import { Intervention } from './../models/Intervention';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-car-interventions',
  templateUrl: './car-interventions.component.html',
  styleUrls: ['./car-interventions.component.css']
})
export class CarInterventionsComponent implements OnInit {

  interventions: Intervention[];
  AncienInterventions: Intervention[];
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
