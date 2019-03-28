import { Intervention } from './../models/Intervention';
import { Component, OnInit } from '@angular/core';
import { InterventionService } from './../services/intervention.service';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-car-interventions',
  templateUrl: './car-interventions.component.html',
  styleUrls: ['./car-interventions.component.css']
})
export class CarInterventionsComponent implements OnInit {
  inter: Intervention[];
  AncienInter: Intervention[];
  immatriculation: string;
  date: Date =  new Date();
  name = 'intervention';
  // tslint:disable-next-line:no-inferrable-types
  pdfSrc: string = '/assets/RIB.pdf';
  constructor(private interventionService: InterventionService, private route: ActivatedRoute) { }

  ngOnInit() {
    let idVehicule = Number(this.route.snapshot.paramMap.get('id'));
    this.getInterventions(idVehicule);
  }

  getInterventions(idVehicule: number): void {
    this.interventionService.getInterventions(idVehicule)
      .subscribe(
        (inter) => {
          this.inter = inter ;
          console.log(inter);
         }
      );
  }


  addIntervention(): void {
      this.inter.push({idIntervention: 4,
      libelleIntervention: this.name,
      justificatifIntervention: '',
      dateFinIntervention: this.date});
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