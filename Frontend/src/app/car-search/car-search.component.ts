import { CarSearchService } from './../services/car-search.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {MatDialog} from '@angular/material';


@Component({
  selector: 'app-car-search',
  templateUrl: './car-search.component.html',
  styleUrls: ['./car-search.component.css']
})
export class CarSearchComponent implements OnInit {

  marques: string[] = [
    'Renault',
    'Toyota',
    'BMW',
    'Mercedes',
    'Ferari',
  ];
  modeles: string[] = [
    'SUV',
    'Citadine',
    '4X4'
  ];
  annee: string[] = [
    '2010',
    '2000',
    '1990',
    '1980',
    '1970',
  ];
  carform: FormGroup;
  matriculeform: FormGroup;
  validMessage: string = '';
  submittedm = false;
  submittedc = false;
  finition: any;
  modele: any;
  tab:any;
  displaymodal= false;
  fini: string;
  res: any;
  voiture: any;

  constructor(public Carservice: CarSearchService, public dialog: MatDialog) {}

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
      matricule: new FormControl('', [Validators.required, Validators.minLength(7), Validators.maxLength(9)]),
    });

    this.carform = new FormGroup({
      marque: new FormControl('', Validators.required),
      modele: new FormControl('', Validators.required),
      annee: new FormControl('', Validators.required),
    });
  }
  get C() { return this.carform.controls; }
  get m() { return this.matriculeform.controls; }

  OnSearchbymatricule() {
    this.submittedm = true;
    if (this.matriculeform.invalid) {
       return;
      }
    console.log (this.matriculeform.value.matricule);
    this.Carservice.getCarMatricule(this.matriculeform.value.matricule).subscribe(res => {
    this.tab = res;
    console.log(this.tab);
    this.finition = this.tab.finitions;
    this.modele = this.tab.modele;

      } );

  }

  OnSearchbymarque(){
    this.submittedc = true;
    if (this.carform.invalid) {
          return;
      }
    this.Carservice.getCarMarque(this.carform.value.marque, this.carform.value.modele, this.carform.value.annee ).subscribe(res => {
      this.tab = res;
      console.log(this.tab);
      this.finition = this.tab.finitions;
      this.modele = this.carform.value.marque + ' ' + this.carform.value.modele + ' ' + this.carform.value.annee;
    });
  }
  Onsavematricule(){
   console.log(this.fini);
   this.Carservice.getcarview(this.matriculeform.value.matricule, this.fini).subscribe(res => {
    this.voiture.marqueVoiture = res.marqueVoiture;
    this.voiture.modeleVoiture = res.modeleVoiture;
    this.voiture.anneeCirculation = res.anneeCirculation;
    this.voiture.carburant = res.carburant;
    this.voiture.boiteVitesse = res.boitevitesse;
    this.voiture.moteur_type = res.moteur_type;
    this.voiture.transmission_type = res.transmission_type;
     console.log (this.voiture);
   });
 }
 Onsavemarque() {
  console.log(this.fini);
  this.Carservice.getcarviewmarque(this.carform.value.marque, this.carform.value.modele, this.carform.value.annee, this.fini)
  .subscribe(res => {
    this.voiture.marqueVoiture = res.marqueVoiture;
    this.voiture.modeleVoiture = res.modeleVoiture;
    this.voiture.anneeCirculation = res.anneeCirculation;
    this.voiture.carburant = res.carburant;
    this.voiture.boiteVitesse = res.boitevitesse;
    this.voiture.moteur_type = res.moteur_type;
    this.voiture.transmission_type = res.transmission_type;
    console.log (this.voiture);
  });
}
  openviewcar(matricule: string, finition: string){
    this.Carservice.getcarview(matricule, finition).subscribe(res => {
      console.log(res);

  });
}

}