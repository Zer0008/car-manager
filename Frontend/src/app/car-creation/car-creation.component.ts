import { Component, OnInit } from '@angular/core';
import {  FileUploader, FileSelectDirective } from 'ng2-file-upload/ng2-file-upload';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CarSearchService} from '../services/car-search.service';
import {vehicule} from '../models/Voiture';
import {MatDialog} from '@angular/material';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-car-creation',
  templateUrl: './car-creation.component.html',
  styleUrls: ['./car-creation.component.css']
})
export class CarCreationComponent implements OnInit {
  private URL =  environment.apiUrl + '/api/upload';
  matriculeform: FormGroup;
  libelleform: FormGroup;
  car: any;
  info: any;
  finition: any;
  modele: any;
  fini: any;
  voiture: any;

  constructor(private Carservice: CarSearchService, private dialog: MatDialog) { }

  public uploader: FileUploader = new FileUploader({url: this.URL,
    itemAlias: 'photo',
    allowedMimeType: ['image/png', 'image/jpg', 'image/jpeg', 'image/gif'],
    maxFileSize: 50 * 1024 * 1024
   });

  ngOnInit() {
  this.voiture = {
  idVehicule: 0,
  immatriculation: '232434354',
  libelleVoiture: 'libele',
  marqueVoiture: 'mercedes',
  modeleVoiture: 'classe s',
  anneeCirculation: 1996,
  finition: 'dsfds',
  justificatif: '/kdh/FFG/',
  photo: './uploads/carte-grise',
  moteur: 'jfkdl',
  carburant: 'Diesel',
  transmisssion: 'auto',
  mesure: '1,45',
  boiteVitesse: 'aea',
  statut: 'en vente',
  visibilite: null,
  isActive: 1

  }
  this.matriculeform = new FormGroup({
    matricule: new FormControl('', [Validators.required, Validators.minLength(9), Validators.maxLength(9)]),
  });

  this.libelleform = new FormGroup({
    libelle: new FormControl('',Validators.required),
  });

  this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
  this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
       console.log('ImageUpload:uploaded:', item, status, response);
       alert('File uploaded successfully');
   };
}

OnSearchbymatricule() {
if (this.matriculeform.invalid) {
   return;
  }
console.log (this.matriculeform.value.matricule);
this.Carservice.getCarMatricule(this.matriculeform.value.matricule).subscribe(res => {
console.log(res);
this.car = res;
this.finition = this.car.finitions;
console.log(this.car.finitions);
this.modele = this.car.modele;
  } );

}

Onsavematricule() {
console.log("recuperation");
this.Carservice.getcarview(this.matriculeform.value.matricule, this.fini).subscribe(res => {
 this.voiture = res;
});
}

onregister() {
this.voiture.libelleVoiture = this.libelleform.value.libelle;
console.log(this.voiture);
// Appeler le service permettant d'ajouter une nouvelle voiture
}


}
