import { Panne } from './../models/Panne';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Intervention } from '../models/Intervention';
import { Observable, Subject, of } from 'rxjs';
import {  tap } from 'rxjs/operators';
import { TypePanne } from '../models/TypePanne';
import { AnnonceIntervention } from '../models/AnnonceIntervention';
import { environment } from '../../environments/environment';


const httpOptions = {
  headers: new HttpHeaders(
    {
      'Content-Type': 'application/json' ,
      'Access-Control-Allow-Origin': '*',
    }
  )
};

@Injectable({
  providedIn: 'root'
})
export class InterventionService {
  private apiUrl =  environment.apiUrl;
  constructor(private http: HttpClient) {}

  getInterventions(idVehicule: number): Observable<Intervention[]> {
    return this.http
      .get<Intervention[]>(this.apiUrl + '/api-car/car/' + idVehicule + '/interventions', httpOptions);
  }

  /** PUT: intervention in the server */
  updateIntervention(idIntervention: number, intervention: any): any {
    return this.http
      .put<any>(this.apiUrl + '/api-car/car/?idIntervention=' + idIntervention, intervention, httpOptions);
  }

  /** POST: intervention in the server */
  createIntervention(idPanne: number, intervention: Intervention): Observable<Intervention> {
    return this.http
     .post<Intervention>(this.apiUrl + '/api-car/car/?idPanne=' + idPanne + '/interventions', intervention, httpOptions);
  }

  /** DELETE: intervention in the server */
  deleteIntervention(idIntervention: number): any {
    return this.http
      .delete<any>(this.apiUrl + '/api-car/car/?idIntervention=' + idIntervention, httpOptions);

  }

  /** GET: typepanne in the server */
  getTypePanneInterventions(): Observable<TypePanne[]> {
    console.log('Je suis dans le service intervention pour type de panne ');
    return this.http
      .get<TypePanne[]>(this.apiUrl + '/api-car/TypePanne', httpOptions);
  }

  getPannes(idVehicule: number): any {
    console.log('Je suis dans le service intervention pour type de panne ');
    return this.http
      .get<Panne[]>(this.apiUrl + '/api-car/Pannes/?idVehicule=' + idVehicule , httpOptions);
  }

  /** POST: post panne in the server */
  createPanne(idVehicule: number, idTypePanne: number, panne: Panne): any {
  // tslint:disable-next-line:max-line-length
  console.log("je suis dans panne");
  return this.http.post(this.apiUrl + '/api-car/cars/' + idVehicule + '/panne?idTypePanne=' + idTypePanne , panne, httpOptions);
}


}