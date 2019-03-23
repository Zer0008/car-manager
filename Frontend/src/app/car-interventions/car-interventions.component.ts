import { Intervention } from './../models/Intervention';
import { Component, OnInit } from '@angular/core';
import { InterventionService } from './../services/intervention.service';
import { interventions } from '../mock-intervention';
import { AncienInterventions } from '../mock-intervention';
import { ActivatedRoute} from '@angular/router';
import { environment } from '../../environments/environment';
import { FileUploader, FileSelectDirective } from 'ng2-file-upload/ng2-file-upload';
import { CarService } from '../services/car.service';
import { Car } from '../models/Car';
import { NgForm, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-car-interventions',
  templateUrl: './car-interventions.component.html',
  styleUrls: ['./car-interventions.component.css']
})
export class CarInterventionsComponent implements OnInit {
  private URL =  environment.apiUrl + '/api/upload';
  interventionform: FormGroup;
  car: Car[];
  inter: Intervention[];
  immatriculation: string;

  // tslint:disable-next-line:no-inferrable-types
  pdfSrc: string = '/assets/RIB.pdf';
  constructor(private interventionService: InterventionService, private carService: CarService, private route: ActivatedRoute) { }

  public uploader: FileUploader = new FileUploader({url: this.URL,
    itemAlias: 'photo',
    allowedMimeType: ['image/png', 'image/jpg', 'image/jpeg', 'image/gif'],
    maxFileSize: 50 * 1024 * 1024
   });

  ngOnInit() {
    /*this.getAncienListIntervention();
    this.getListIntervention();*/
    this.immatriculation = this.route.snapshot.paramMap.get('id');
    this.getInterventions(this.immatriculation);
    this.getInfosCar(this.immatriculation);
    this.interventionform = new FormGroup({
      nomIntervention: new FormControl(''),
      dateDebut: new FormControl(''),
      dateFin: new FormControl('')
    });
    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
       console.log('ImageUpload:uploaded:', item, status, response);
       alert('File uploaded successfully');
   };
  }

  getInterventions(immatriculation: string): void {
    this.interventionService.getInterventions(immatriculation)
      .subscribe(
        (inter) => {
          this.inter = inter ;
          console.log(inter);
         }
      );
  }
  getInfosCar(immatriculation: string): void {
    this.carService.getInfosCar(immatriculation)
      .subscribe(
        (car) => {
          this.car = car ;
          console.log(car);
         }
      );
  }

 /* getListIntervention(): void {
    this.interventionService.getListIntervention()
      .subscribe(inter => this.inter = inter);
  }
  getAncienListIntervention(): void {
    this.interventionService.getAncienListIntervention()
      .subscribe(AncienInter => this.AncienInter = AncienInter);
  }*/

  onSubmit(form: NgForm){

    const nomIntervention = form.value['nomIntervention'];
    const dateDebut = form.value['dateDebut'];
    const dateFin = form.value['dateFin'];

    this.inter.push({
      idIntervention: 4,
      idPanne: 1,
      libelleIntervention: nomIntervention,
      justificatifIntervention: '',
      dateDebutIntervention: dateDebut,
      dateFinIntervention: dateFin});
  }

  deleteIntervention(interv: any): void {
    this.inter.splice(this.inter.indexOf(interv), 1);
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