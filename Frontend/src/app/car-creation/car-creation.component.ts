import { Component, OnInit } from '@angular/core';
import {  FileUploader, FileSelectDirective } from 'ng2-file-upload/ng2-file-upload';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CarSearchService} from '../services/car-search.service';
import { Vehicule}   from '../models/Voiture';
import {MatDialog} from '@angular/material';
import { environment } from '../../environments/environment';



@Component({
  selector: 'app-car-creation',
  templateUrl: './car-creation.component.html',
  styleUrls: ['./car-creation.component.css']
})
export class CarCreationComponent implements OnInit {

  
  matriculeform: FormGroup;
  libelleform: FormGroup;
  car: any;
  user: any;
  info: any;
  finition: any;
  modele: any;
  fini: any;
  voiture: any;
  url: any;
  url2: any;
  private URLjust =  environment.apiUrl + '/api/upload/carte_grise'  ;
  private URLphoto =  environment.apiUrl + '/api/upload/photo'  ;
  constructor(private Carservice: CarSearchService, private dialog: MatDialog) { 
    this.user = JSON.parse(localStorage.getItem('user'));
  }

 
  public uploader: FileUploader = new FileUploader({url: this.URLjust,
    itemAlias: 'file',
    allowedMimeType: ['image/png', 'image/jpg', 'image/jpeg', 'image/gif'],
    maxFileSize: 50 * 1024 * 1024
   });

   public uploaderphoto: FileUploader = new FileUploader({url: this.URLphoto,
    itemAlias: 'photo',
    allowedMimeType: ['image/png', 'image/jpg', 'image/jpeg', 'image/gif'],
    maxFileSize: 50 * 1024 * 1024
   });

  ngOnInit() {
  this.voiture = {
  immatriculation: '',
  libelleVoiture: '',
  marqueVoiture: '',
  modeleVoiture: '',
  anneeCirculation: '',
  finition: '',
  justificatif: '',
  photo: '',
  carburant: '',
  boiteVitesse: '',
  moteur_type: '',
  moteur_cylindree: '',
  moteur_emissionC02: '',
  transmission_type: '',
  transmission_nbRapports: '',
  transmission_pneumatique: '',
  mesures_0a100: '',
	mesures_masseAVide: '',
	mesures_capaciteNomCoffre: '',
	mesures_capaciteMaxCoffre: '',
	consommation_urbaine: '',
	consommation_extraUrbaine: '',
  statut: 'en vente',
  visibilite: '',
  isActive: true

  }
  this.matriculeform = new FormGroup({
    matricule: new FormControl('', [Validators.required, Validators.minLength(9), Validators.maxLength(9)]),
  });

  this.libelleform = new FormGroup({
    libelle: new FormControl('', Validators.required),
  });

  

  this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
  this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
       console.log('ImageUpload:uploaded:', item, status, response);
       this.url = JSON.parse(response);
       console.log(this.url.url);
       this.voiture.justificatif = this.url.url;
       //alert('File uploaded successfully');
   };

  this.uploaderphoto.onAfterAddingFile = (file) => { file.withCredentials = false; };
  this.uploaderphoto.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
       console.log('ImageUpload:uploaded:', item, status, response);
       this.url2 = JSON.parse(response);
       console.log(this.url2.url );
       this.voiture.photo = this.url2.url;
       //alert('File uploaded successfully');
   };
}
get m() { return this.matriculeform.controls; }
OnSearchbymatricule() {
if (this.matriculeform.invalid) {
   return;
  }
console.log (this.matriculeform.value.matricule);
this.Carservice.getCarMatricule(this.matriculeform.value.matricule).subscribe(res => {
console.log(res);
this.car = res;
this.finition = this.car.finitions;
this.voiture.immatriculation = this.matriculeform.value.matricule;
console.log(this.car.finitions);
this.modele = this.car.modele;
  } );

}

Onsavematricule() {
console.log('recuperation');
this.voiture.finition = this.fini;
this.Carservice.getcarview(this.matriculeform.value.matricule, this.fini).subscribe(res => {
 this.voiture.marqueVoiture = res.marqueVoiture;
 this.voiture.modeleVoiture = res.modeleVoiture;
 this.voiture.anneeCirculation = res.anneeCirculation;
 this.voiture.carburant = res.carburant;
 this.voiture.boiteVitesse = res.boitevitesse;
 this.voiture.moteur_type = res.moteur_type;
 this.voiture.transmission_type = res.transmission_type;

});
}

Onregister() {
this.voiture.libelleVoiture = this.libelleform.value.libelle;
console.log(this.voiture);
this.Carservice.savecar(this.user.email, this.voiture).subscribe(res =>{
  console.log(res);
});

}


}