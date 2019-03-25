import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, NgForm} from "@angular/forms";
import {VenteVehiculeService} from "../services/vente-vehicule.service";
import {Route, Router} from "@angular/router";
import {AcquisitionVoiture} from "../models/AcquisitionVoiture";

@Component({
  selector: 'app-vente-vehicule',
  templateUrl: './vente-vehicule.component.html',
  styleUrls: ['./vente-vehicule.component.css']
})
export class VenteVehiculeComponent implements OnInit {

  acquisitionForm: FormGroup;
  userList: any;
  user: any;
  id: number;

  constructor(private formBuilder: FormBuilder,
              private venteVehiculeService: VenteVehiculeService,
              private router: Router) {
    this.user = JSON.parse(localStorage.getItem("user"));
    console.log(this.user.idUser);
  }

  ngOnInit() {
    this.initFormAcquisition();
  }

  initFormAcquisition(){
    this.acquisitionForm = this.formBuilder.group({
      emailNewProp: '',
      justifVente: ''
    });
  }

  get f(){
    return this.acquisitionForm.controls;
  }

  onSubmitAcquisition(){
    //const formValue = this.acquisitionForm.value;
    this.user = JSON.parse(localStorage.getItem("user"));
    const newAcquisition = new AcquisitionVoiture(
        this.user.idUser,
        this.getUserId(this.f.emailNewProp.value),
        1,
        new Date()
    );

    console.log("Email: "+this.f.emailNewProp.value);
    console.log("Id de l'utilisateur connecté: "+newAcquisition.idAcheteur);
    console.log("Id du receveur: "+newAcquisition.idReceveur);
    console.log("Id véhicule: "+newAcquisition.idVehicule);
    console.log("Utilisateur: "+this.venteVehiculeService.getUser(this.f.emailNewProp.value));
    //console.log("Date d'acquisition: "+newAcquisition.dateAcquisition);
    //console.log("Justificatif: "+formValue['justifVente']);
    //this.id = this.getUserId();
    //this.venteVehiculeService.doTransfert(newAcquisition);
    //this.router.navigate(['/vehicules']);
  }

  getUserId(email: string): number{
    this.userList = this.venteVehiculeService.getUser(email);

    for (let user of this.userList){
      if (user.email == email){
        console.log("L'utilisateur existe: "+user.email);
        return user.idUser;
      }else{
        console.log("Introuvable")
        return 0;
      }
    }
  }

  //saveAppareilsToServer() {
  //  this.httpClient
  //      .post('https://httpclient-demo.firebaseio.com/appareils.json', this.appareils)
   //     .subscribe(
    //        () => {
      //        console.log('Enregistrement terminé !');
        //    },
          //  (error) => {
            //  console.log('Erreur ! : ' + error);
            //}
        //);
  //}

}
