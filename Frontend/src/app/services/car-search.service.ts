import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CarSearchService {
  private apiUrl =  environment.apiUrl;
  constructor(private http: HttpClient) { }

  getCarMatricule(matricule: string): any {

    return this.http.get(this.apiUrl + '/api-mock?matricule=' + matricule);
}
getCarMarque(marque: string, modele: string, annee: string): any {
    return this.http.get(this.apiUrl + '/api-mock?marque=' + marque + '&modele=' + modele + '&annee=' + annee);
}
getcarview(matricule: string, finition: string): any {
    return this.http.get(this.apiUrl + '/api-mock?matricule=' + matricule + '&finition=' + finition);
}
getcarviewmarque(marque: string, modele: string, annee: string, finition: string): any {
    return this.http.get(this.apiUrl + '/api-mock?marque=' + marque + '&modele=' + modele + '&annee=' + annee + '&finition=' + finition);
}
}
