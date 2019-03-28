import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { tap } from "rxjs/operators";
import { User } from "../models/User";
import {vehicule} from "../models/Voiture";
import {Observable} from "rxjs";
import {Intervention} from "../models/Intervention";
// import { Voiture } from "../models/Voiture";


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json' ,
    'Access-Control-Allow-Origin': '*',
  })
};

@Injectable({
  providedIn: "root"
})
export class UserService {
  private apiUrl = environment.apiUrl;

  constructor(
    private http: HttpClient,
  ) {}

  updateUser(email: string, user: any): any {
    console.log("service maj appele");
    return this.http
      .put<any>(this.apiUrl + "/api/user?email=" + email, user, httpOptions)
      .pipe(
        tap((state: number) => {
          if (state !== 0) {
            console.log(`Update User w/ name=${user.name}`);
          } else {
            console.log("impossible de faire la mise a jour");
          }
        })
      );
  }

  getCar(email: string, statut: any): any {
      console.log("GET");
      return this.http.get(this.apiUrl + "/api-car/cars?email=" + email + "&statut=" + statut, httpOptions)
  }

  removeCar(): any{

  }

    getIntervention(email: string, statut: any): any {
        console.log("GET");
        return this.http.get(this.apiUrl + "/api-annonces/interventions?email=" + email + "&statut=" + statut, httpOptions)

    }

}
