import { AnnonceIntervention } from './../models/AnnonceIntervention';
import { TypePanne } from './../models/TypePanne';
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { tap } from "rxjs/operators";
import {AnnonceVente} from "../models/AnnonceVente";


const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*"
  })
};

@Injectable({
  providedIn: "root"
})
export class AnnoncesService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getAnnoncesVente(): any {
    return this.http
      .get<any>(this.apiUrl + "/api-annonces/vente", httpOptions)
      .pipe(
        tap((annoncesVente: any[]) => {
          console.log("intervention recus " + annoncesVente.length);
        })
      );
  }

  createAnnonceVente(idVehicule: number, annoncevente: AnnonceVente): any {
    console.log(idVehicule);
    console.log(annoncevente);
    return this.http.post(
      this.apiUrl + "/api-annonces/vente?idVehicule=" + idVehicule,
      annoncevente,
      httpOptions
    );
  }

  getInterventions(): any {
    console.log("getInterventions");
    return this.http.get(
      this.apiUrl + "/api-annonces/interventions",
      httpOptions
    );
  }

  /** POST: request intervention in the server */
createRequestIntervention(idVehicule: number, requestIntervention: AnnonceIntervention): any {
  // tslint:disable-next-line:max-line-length
  return this.http.post(this.apiUrl + '/api-annonces/interventions?idVehicule=' + idVehicule, requestIntervention, httpOptions);
}

/** GET: type panne in the server */
getTypePanne(): any {
  return this.http.get<TypePanne[]>(this.apiUrl + '/api-car/TypePanne', httpOptions);
}

}
