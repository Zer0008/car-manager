import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Intervention } from '../models/Intervention';
import { Car } from '../models/Car';
import { interventions } from '../mock-intervention';
import { AncienInterventions } from '../mock-intervention';
import { Observable, Subject, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
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

  /** GET: intervention in the server */
  getInterventions(immatriculation: string): Observable<Intervention[]> {
    console.log('Je suis dans le service intervention ' + immatriculation);
    return this.http
      .get<Intervention[]>(this.apiUrl + '/api-car/car/' + immatriculation + '/interventions', httpOptions);
  }

  /** PUT: intervention in the server */
  updateIntervention(idIntervention: number, intervention: any): any {
    console.log('Je suis dans le service intervention ' + idIntervention);
    return this.http
      .put<any>(this.apiUrl + '/api-car/car/?idIntervention=' + idIntervention, intervention, httpOptions);
  }

  /** POST: intervention in the server */
  createIntervention(intervention: Intervention): Observable<Intervention> {
    return this.http
     .post<Intervention>(this.apiUrl + '/api-car/car/', intervention, httpOptions);
  }

  /** DELETE: intervention in the server */
  deleteIntervention(idIntervention: number): any {
    console.log('Je suis dans le service intervention ' + idIntervention);
    return this.http
      .delete<any>(this.apiUrl + '/api-car/car/?idIntervention=' + idIntervention, httpOptions);

  }

  //Mock-server
  getListIntervention(): Observable<Intervention[]> {
    return of(interventions);
  }
  /*getAncienListIntervention(): Observable<Intervention[]> {
    return of(AncienInterventions);
  }*/
}