import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { RequestIntervention } from '../models/Intervention-request';
import { TypePanne } from '../models/TypePanne';
import { Observable } from 'rxjs';

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
export class RequestInterventionService {
  private apiUrl =  environment.apiUrl;
  constructor(private http: HttpClient) {}
  private requestIntervention: RequestIntervention;

/** POST: request intervention in the server */
createRequestIntervention(idVehicule: number, requestIntervention: RequestIntervention): any {
  // tslint:disable-next-line:max-line-length
  return this.http.post(this.apiUrl + '/api-annonces/interventions?idVehicule=' + idVehicule, requestIntervention, httpOptions);
}

/** GET: type panne in the server */
getTypePanne(): any {
  return this.http.get<TypePanne[]>(this.apiUrl + '/api-car/TypePanne', httpOptions);
}

}
