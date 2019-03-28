import { UserService } from './../services/user.service';
import { Component, OnInit } from "@angular/core";
import { CarService } from "./../services/car.service";
import { FormBuilder, FormGroup, NgForm, Validators } from "@angular/forms";
import { ActivatedRoute, Route, Router } from "@angular/router";
import { User } from "../models/User";
import * as _ from "lodash";
import { FileUploader } from "ng2-file-upload";
import { environment } from "../../environments/environment";
import { MatDialog } from "@angular/material";

@Component({
  selector: "app-vente-vehicule",
  templateUrl: "./vente-vehicule.component.html",
  styleUrls: ["./vente-vehicule.component.css"]
})
export class VenteVehiculeComponent implements OnInit {
  acquisitionForm: FormGroup;
  userList: User[];
  dateAcquisition: Date;
  user: any;
  idReceveur: any;
  url: any;
  justificatif: any;
  idVehicule: any;
  vehicule: any;

  testEmailString: string;
  private URLjust = environment.apiUrl + "/api/upload/vente";

  constructor(
    private formBuilder: FormBuilder,
    private carService: CarService,
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService
  ) {
    this.idVehicule = this.route.snapshot.paramMap.get("id");
  }

  public uploader: FileUploader = new FileUploader({
    url: this.URLjust,
    itemAlias: "file",
    allowedMimeType: ["image/png", "image/jpg", "image/jpeg", "image/gif"],
    maxFileSize: 50 * 1024 * 1024
  });

  ngOnInit() {
    this.initFormAcquisition();

    this.userService.getAllUsers().subscribe(listeUser => {
      this.userList = listeUser;
    });

    this.carService.getInfosCar(this.idVehicule).subscribe(
        (res) => this.vehicule = res[0]
    );

    this.uploader.onAfterAddingFile = file => {
      file.withCredentials = false;
    };
    this.uploader.onCompleteItem = (
      item: any,
      response: any,
      status: any,
      headers: any
    ) => {
      console.log("ImageUpload:uploaded:", item, status, response);
      this.url = JSON.parse(response);
      this.justificatif = this.url.url;
      console.log("Justificatif: " + this.justificatif);
    };
  }

  initFormAcquisition() {
    this.acquisitionForm = this.formBuilder.group({
      emailNewProp: ["", [Validators.required, Validators.email]],
      justifVente: ["", Validators.required]
    });
  }

  get f() {
    return this.acquisitionForm.controls;
  }

  onSubmitAcquisition() {
    this.user = JSON.parse(localStorage.getItem("user"));
    const email = this.f.emailNewProp.value;
    this.dateAcquisition = new Date();

    console.log(this.userList);

    //this.testEmailString = this.testEmail(email, email);

    for (let i in this.userList) {
      if (this.userList[i].email === email) {
        if (email !== this.user.email) {
          console.log("idReceveur: " + this.userList[i].idUser);
          this.idReceveur = this.userList[i].idUser;

          this.carService
            .putTransfert(
              this.idReceveur,
              this.user.idUser,
              this.idVehicule,
              this.dateAcquisition,
              this.justificatif
            )
            .subscribe(
              () => {
                console.log("Transfert effectué");
                this.testEmailString = "success";
                this.router.navigate(["/vehicules"]);
              },
              error => {
                console.log("Rec: " + this.idReceveur);
                console.log("just: " + this.justificatif);
                console.log(error);
              }
            );
        } else {
          this.testEmailString = "identique";
        }
      } else {
        this.testEmailString = "not exist";
        console.log("Erreur");
      }
    }

    //this.router.navigate(['/vehicules']);
  }

  getRetour() {
    this.router.navigate(["/vehicule/"+this.idVehicule]);
  }

}
