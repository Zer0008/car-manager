import { AuthentificationService } from './../services/authentification.service';
// import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UserService } from "../services/user.service";
import {vehicule} from "../models/Voiture";

@Component({
  selector: 'app-parametre-vente',
  templateUrl: './parametre-vente.component.html',
  styleUrls: ['./parametre-vente.component.css']
})
export class ParametreVenteComponent implements OnInit {
  user: any;
  vehicules: any[];

  constructor(
      private userservice: UserService,
      private authentificationService: AuthentificationService,
  ) {
    this.user = JSON.parse(localStorage.getItem("user"));
    console.log(this.user);
  }

  ngOnInit() {
  }

}
