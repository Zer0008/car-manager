import { Intervention } from './../models/Intervention';
import { Component, OnInit } from '@angular/core';
import { InterventionService } from './../services/intervention.service';
import { interventions } from '../mock-intervention';
import { AncienInterventions } from '../mock-intervention';

@Component({
  selector: 'app-car-interventions',
  templateUrl: './car-interventions.component.html',
  styleUrls: ['./car-interventions.component.css']
})
export class CarInterventionsComponent implements OnInit {
  inter: Intervention[];
  AncienInter: Intervention[];
  // tslint:disable-next-line:no-inferrable-types
  pdfSrc: string = '/assets/RIB.pdf';
  constructor(private interventionService: InterventionService) { }

  ngOnInit() {
    this.getAncienListIntervention();
    this.getListIntervention();
  }

  getListIntervention(): void {
    this.interventionService.getListIntervention()
      .subscribe(inter => this.inter = inter);
  }
  getAncienListIntervention(): void {
    this.interventionService.getAncienListIntervention()
      .subscribe(AncienInter => this.AncienInter = AncienInter);
  }

  deleteIntervention(interv: any): void {
    this.inter.splice(this.inter.indexOf(interv), 1);
  }

  deleteAncienIntervention(interv: any): void {
    this.AncienInter.splice(this.AncienInter.indexOf(interv), 1);
  }

  onFileSelected() {
  const $img: any = document.querySelector('#file');

  if (typeof (FileReader) !== 'undefined') {
    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.pdfSrc = e.target.result;
    };

    reader.readAsArrayBuffer($img.files[0]);
  }
}

}
