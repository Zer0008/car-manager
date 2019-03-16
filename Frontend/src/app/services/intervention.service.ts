import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Intervention } from '../models/Intervention';
import { interventions } from '../mock-intervention';
import { AncienInterventions } from '../mock-intervention';
import { Observable, Subject, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
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
      .get<Intervention[]>(this.apiUrl + '/api-car/car/' + immatriculation + '/interventions', httpOptions)
      .pipe(
        tap(( interventions: Intervention[]) =>
          {
            console.log('intervention recus ' + interventions.length );
          }
        )
      );
  }
 
  //Mock-server
  getListIntervention(): Observable<Intervention[]> {
    return of(interventions);
  }
  getAncienListIntervention(): Observable<Intervention[]> {
    return of(AncienInterventions);
  }
}
