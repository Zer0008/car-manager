import { AuthentificationService } from './../services/authentification.service';
import { Component, OnInit } from '@angular/core';
import { UserService } from "../services/user.service";
import {Vehicule} from "../models/Voiture";
import {VenteService} from "../services/vente.service";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, NgForm} from "@angular/forms";
import { ActivatedRoute} from "@angular/router";
import {AnnonceVente} from "../models/annonceVente";
import {FileUploader} from "ng2-file-upload";
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-parametre-vente',
  templateUrl: './parametre-vente.component.html',
  styleUrls: ['./parametre-vente.component.css']
})
export class ParametreVenteComponent implements OnInit {
  user: any;
  vehicules: any[];
  formVente: FormGroup;


  idVehicule: number;
  //immatriculation: any;
  datePublication: any;

  voiture: any;
  url: any;
  private URLphoto =  environment.apiUrl + '/api/upload/photo'  ;



  constructor(
      private formAnnonceVente: FormBuilder,
      private route: Router,
      private routeA: ActivatedRoute,
      private userservice: UserService,
      private authentificationService: AuthentificationService,
      private venteservice: VenteService,
  ) {
    this.user = JSON.parse(localStorage.getItem("user"));
    this.idVehicule = Number(this.routeA.snapshot.paramMap.get('id'));
    //this.immatriculation = this.routeA.snapshot.paramMap.get('id');
    console.log(this.user);
    console.log("Paramètre: "+this.idVehicule);
   // console.log("Paramètre: "+this.immatriculation);
    console.log("Test constructeur");
  }

/*  onSubmit(form: NgForm){
    const vehicule = "";
    const datePublication = "";

    const infos = form.value['complementInfos'];
    const price = form.value['price'];
    const emailUser = form.value['mailNewProp'];
    const photo = form.value['photo'];

    this.venteservice.postvente()
        .updateAcquisition(1, infos, price, emailUser, photo, vehicule, dateAcquisition);
  }*/

  public uploaderphoto: FileUploader = new FileUploader({url: this.URLphoto,
    itemAlias: 'photo',
    allowedMimeType: ['image/png', 'image/jpg', 'image/jpeg', 'image/gif'],
    maxFileSize: 50 * 1024 * 1024
  });

  annuler(){
    this.route.navigateByUrl("/vehicule/"+this.idVehicule);
  }

  ngOnInit() {
    this.formVente = this.formAnnonceVente.group({
      photo : '',
      libelle: '',
      infos : '',
      kilometrage : '',
      prix : '',
      negociation : '',
      emailProp: '',
      telephoneProp : '',
      ville : ''
    });

    this.uploaderphoto.onAfterAddingFile = (file) => { file.withCredentials = false; };
    this.uploaderphoto.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      console.log('ImageUpload:uploaded:', item, status, response);
      this.url = JSON.parse(response);
      console.log(this.url.url2);
    };
  }

  get f(){
    return this.formVente.controls;
  }

  miseEnligne(){

    const annonce = new AnnonceVente(
        new Date(),
        this.f.libelle.value,
        this.f.infos.value,
        this.f.prix.value,
        this.url.url2,
        this.f.kilometrage.value,
        this.f.ville.value,
    );

    console.log("################################");

    this.venteservice.createAnnonceVente(this.idVehicule, annonce).subscribe(res => {
      console.log(res);
      this.route.navigateByUrl("/annonce-vente");
    });

    console.log("################################");
    //console.log(annonce.idVehicule);
/*    console.log(annonce.libelleAnnonceVente);
    console.log(annonce.descriptifAnnonceVente);
    console.log(annonce.prixVente);
    console.log(annonce.kilometrage);


    console.log(annonce);
    console.log(this.immatriculation);*/

    //this.venteservice.postvente(this.immatriculation, annonce);

  }

}
