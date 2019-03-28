import { CarService } from "./../services/car.service";
import { AnnoncesService } from "./../services/annonces.service";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, NgForm } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { AnnonceVente } from "../models/annonceVente";
import { FileUploader } from "ng2-file-upload";
import { environment } from "../../environments/environment";
import { Car } from "../models/Car";

@Component({
  selector: "app-annonce-vente-creation",
  templateUrl: "./annonce-vente-creation.component.html",
  styleUrls: ["./annonce-vente-creation.component.css"]
})
export class AnnonceVenteCreationComponent implements OnInit {
  user: any;
  vehicule: Car;
  formVente: FormGroup;
  idVehicule: number;
  datePublication: any;

  voiture: any;
  url: any;
  private URLphoto = environment.apiUrl + "/api/upload/photo";
  constructor(
    private formAnnonceVente: FormBuilder,
    private route: Router,
    private routeA: ActivatedRoute,
    private annoncesservice: AnnoncesService,
    private carservice: CarService
  ) {
    this.user = JSON.parse(localStorage.getItem("user"));
    this.idVehicule = Number(this.routeA.snapshot.paramMap.get("id"));
    //this.immatriculation = this.routeA.snapshot.paramMap.get('id');
    console.log(this.user);
    console.log("Paramètre: " + this.idVehicule);
    // console.log("Paramètre: "+this.immatriculation);
    console.log("Test constructeur");
  }

  public uploaderphoto: FileUploader = new FileUploader({
    url: this.URLphoto,
    itemAlias: "photo",
    allowedMimeType: ["image/png", "image/jpg", "image/jpeg", "image/gif"],
    maxFileSize: 50 * 1024 * 1024
  });

  annuler() {
    this.route.navigateByUrl("/vehicule/" + this.idVehicule);
  }

  ngOnInit() {
    this.carservice
      .getInfosCar(this.idVehicule)
      .subscribe( 
        (car) => {
          this.vehicule = car[0] ;
        }
      );
    this.formVente = this.formAnnonceVente.group({
      photo: "",
      libelle: "",
      infos: "",
      kilometrage: "",
      prix: "",
      negociation: "",
      emailProp: "",
      telephoneProp: "",
      ville: ""
    });

    this.uploaderphoto.onAfterAddingFile = file => {
      file.withCredentials = false;
    };
    this.uploaderphoto.onCompleteItem = (
      item: any,
      response: any,
      status: any,
      headers: any
    ) => {
      console.log("ImageUpload:uploaded:", item, status, response);
      this.url = JSON.parse(response);
      console.log(this.url.url);
    };
  }
  get f() {
    return this.formVente.controls;
  }

  miseEnligne() {
    const annonce = new AnnonceVente(
      new Date(),
      this.f.libelle.value,
      this.f.infos.value,
      this.f.prix.value,
      this.url.url,
      this.f.kilometrage.value,
      this.f.ville.value
    );

    this.annoncesservice
      .createAnnonceVente(this.idVehicule, annonce)
      .subscribe(res => {
        console.log(res);
        this.route.navigateByUrl("/annonces-vente");
      });
  }
}
