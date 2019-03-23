import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
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
export class CarSearchService {
  private apiUrl =  environment.apiUrl;
  constructor(private http: HttpClient) { }

  getCarMatricule(matricule: string): any {
    return this.http.get(this.apiUrl + '/api-mock?matricule=' + matricule, httpOptions);
}
getCarMarque(marque: string, modele: string, annee: string): any {
    return this.http.get(this.apiUrl + '/api-mock?marque=' + marque + '&modele=' + modele + '&annee=' + annee, httpOptions);
}
getcarview(matricule: string, finition: string): any {
    return this.http.get(this.apiUrl + '/api-mock?matricule=' + matricule + '&finition=' + finition, httpOptions);
}
getcarviewmarque(marque: string, modele: string, annee: string, finition: string): any {
    return this.http.get(this.apiUrl + '/api-mock?marque=' + marque + '&modele=' + modele + '&annee=' + annee + '&finition=' + finition, httpOptions);
}

}
