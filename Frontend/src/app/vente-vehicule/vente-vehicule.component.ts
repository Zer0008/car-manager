import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from "@angular/forms";
import {VenteVehiculeService} from "../services/vente-vehicule.service";
import {ActivatedRoute, Route, Router} from "@angular/router";
import {AcquisitionVoiture} from "../models/AcquisitionVoiture";
import {User} from "../models/User";
import * as _ from "lodash";
import {any} from "codelyzer/util/function";
import {CarSearchService} from "../services/car-search.service";
import {FileUploader} from "ng2-file-upload";
import {environment} from "../../environments/environment";
import {MatDialog} from '@angular/material';
import {error} from "@angular/compiler/src/util";

@Component({
  selector: 'app-vente-vehicule',
  templateUrl: './vente-vehicule.component.html',
  styleUrls: ['./vente-vehicule.component.css']
})
export class VenteVehiculeComponent implements OnInit {

  acquisitionForm: FormGroup;
  userList: User[];
  dateAcquisition: Date;
  user: any;
  idReceveur: any;
  url: any;
  justificatif: any;
  private URLjust =  environment.apiUrl + '/api/upload/vente';
  idVehicule: any = this.route.snapshot.paramMap.get("idVehicule");

  constructor(private formBuilder: FormBuilder,
              private venteVehiculeService: VenteVehiculeService,
              private router: Router,
              private route: ActivatedRoute,
              private dialog: MatDialog) {
  }

  public uploader: FileUploader = new FileUploader({url: this.URLjust,
    itemAlias: 'photo',
    allowedMimeType: ['image/png', 'image/jpg', 'image/jpeg', 'image/gif'],
    maxFileSize: 50 * 1024 * 1024
  });

  ngOnInit() {
    this.initFormAcquisition();

    this.venteVehiculeService.getUser().subscribe(listeUser => {
      this.userList = listeUser;
    });

    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      console.log('ImageUpload:uploaded:', item, status, response);
      this.url = JSON.parse(response);
      this.justificatif = this.url.url;
      console.log("Justificatif: "+this.justificatif);
      alert('File uploaded successfully');
    };
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
    this.user = JSON.parse(localStorage.getItem("user"));
    const email = this.f.emailNewProp.value;
    this.dateAcquisition = new Date();

    console.log(this.userList);

    for (let i in this.userList){
      if (this.userList[i].email == email){
        if (email !== this.user.email){
          console.log("idReceveur: "+this.userList[i].idUser);
          this.idReceveur = this.userList[i].idUser;

          this.venteVehiculeService.putTransfert(this.user.idUser, this.idReceveur, this.idVehicule, this.dateAcquisition, this.justificatif).subscribe(
              () => {
                console.log("Transfert effectué");
              },
              (error) => {
                console.log("Rec: "+this.idReceveur);
                console.log("just: "+this.justificatif);
                console.log(error);
          }
          );
        }
        else{
        }
      }else{
        console.log("Erreur");
      }
    }

    //this.router.navigate(['/vehicules']);
  }

  getUserObject(){
    //const email = this.f.emailNewProp.value;
    this.venteVehiculeService.getUser().subscribe((response) => {
      this.userList = response;
    });
  }
}
