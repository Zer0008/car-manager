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
  private listIntervention = new Subject<Intervention>();
  constructor(private http: HttpClient) {}

  /** POST: intervention in the server */
  createIntervention(intervention: Intervention): Observable<Intervention> {
    return this.http
      .post<Intervention>(this.apiUrl + '/path', intervention, httpOptions)
      .pipe(
        tap((newIntervention: Intervention) =>
          {
            console.log(`added intervention w/ id=${newIntervention.idIntervention}`),
            this.setIntervention(newIntervention);
          }
        )
      );
  }

  setIntervention(intervention: any): void {
    localStorage.setItem('intervention', JSON.stringify(intervention));
    this.listIntervention.next(intervention);
  }

  getIntervention(): Observable<any> {
    return this.listIntervention.asObservable();
  }
  
  //Mock-server
  getListIntervention(): Observable<Intervention[]> {
    return of(interventions);
  }
  getAncienListIntervention(): Observable<Intervention[]> {
    return of(AncienInterventions);
  }
}
