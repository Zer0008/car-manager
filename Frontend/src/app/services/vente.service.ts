import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { tap } from "rxjs/operators";
import { Vehicule } from "../models/Voiture";
import {AnnonceVente} from "../models/annonceVente";
import {error} from "@angular/compiler/src/util";
import {any} from "codelyzer/util/function";
import {Observable} from "rxjs";
import {User} from "../models/User";
// import {Voiture} from "../models/Voiture";

const httpOptions = {
  headers: new HttpHeaders(
      {
        'Content-Type': 'application/json' ,
        'Access-Control-Allow-Origin': '*',
      }
  )
};
// immatriculation et annonce vente(id dans url, date, libelle, annonce de publication)

@Injectable({
  providedIn: 'root'
})
export class VenteService {
  private apiUrl = environment.apiUrl;
  private annoncevente: AnnonceVente;

  constructor(
      private http: HttpClient
  ) {}

  createAnnonceVente(idVehicule: number, annoncevente: AnnonceVente): any {


      console.log(idVehicule);
      console.log(annoncevente);

     return this.http.post(this.apiUrl + "/api-annonces/vente?idVehicule=" +idVehicule, annoncevente, httpOptions);

    //console.log(this.http.post(this.apiUrl + "/api-annonces/vente", httpOptions));
/*    this.http.post(this.apiUrl + "/api-annonces/vente?immatriculation=" +immatriculation, annoncevente, httpOptions)
        .subscribe(
            () => {
              console.log("Post effectué");
            },
            (error) => {
              console.log(error);
            }
        );*/
  }


}




