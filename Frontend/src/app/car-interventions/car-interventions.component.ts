    
import { Intervention } from './../models/Intervention';
import { AnnoncesService } from "./../services/annonces.service";
import { Component, OnInit } from '@angular/core';
import { CarService } from './../services/car.service';
import { Car } from './../models/Car';
import { TypePanne } from '../models/TypePanne';
import { InterventionService } from './../services/intervention.service';
import { ActivatedRoute} from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import {  FileUploader } from 'ng2-file-upload/ng2-file-upload';
import { environment } from "../../environments/environment";
import * as _ from "lodash";

@Component({
  selector: 'app-car-interventions',
  templateUrl: './car-interventions.component.html',
  styleUrls: ['./car-interventions.component.css']
})
export class CarInterventionsComponent implements OnInit {
  inter: Intervention[];
  idVehicule: number;
  car: Car;
  typePan: TypePanne;
  idTypePanne:number;
  panne: any;
  panneForm: FormGroup;
  disabled = true;
  private URLphoto = environment.apiUrl + "/api/upload/photo";

  constructor(private interventionService: InterventionService, private route: ActivatedRoute, private carService: CarService, private formBuilder: FormBuilder, private typePanneService: AnnoncesService) { }
 /* public uploaderphoto: FileUploader = new FileUploader({url: this.URLphoto,
    itemAlias: 'photo',
    allowedMimeType: ['image/png', 'image/jpg', 'image/jpeg', 'image/gif'],
    maxFileSize: 50 * 1024 * 1024
   });*/

  ngOnInit() {
    this.idVehicule = Number(this.route.snapshot.paramMap.get('id'));
    this.getInterventions(this.idVehicule);
    this.getInfosCar(this.idVehicule);
    this.getTypePanne();
    this.getPanne();
    this.panneForm = this.formBuilder.group({
      libellePanne: "",
      typePanne: ""
    });
  }

  getInfosCar(idVehicule: number): void {
    this.carService.getInfosCar(idVehicule)
      .subscribe(
        (car) => {
          this.car = car[0];
          console.log(car);
         } 
      );
  }

  getPanne(): void {
    this.interventionService.getPannes(this.idVehicule)
      .subscribe(
        (panne) => {
          this.panne = panne;
          console.log(panne);
         } 
      );
  }

  getTypePanne(): void {
    this.typePanneService.getTypePanne().subscribe(typePan => {
      this.typePan = typePan;
      this.idTypePanne = typePan[0].idTypePanne;
    });
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

  changeState(){
    this.disabled = false;
  }

  get f() {
    return this.panneForm.controls;
  }

  onSubmit() {
    const panne = new Panne(
      this.f.libellePanne.value,
       );

    this.interventionService
      .createPanne(this.idVehicule, this.idTypePanne, panne)
      .subscribe(res => {
        console.log(res);
      });
  }

}