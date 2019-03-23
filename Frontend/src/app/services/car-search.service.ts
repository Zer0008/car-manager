import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from "@angular/common/http";
import { environment } from '../../environments/environment';
import { EmailValidator } from '@angular/forms';
import {vehicule}   from '../models/Voiture';
import { catchError, tap, map } from 'rxjs/operators';
import { throwError } from 'rxjs';

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

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  };
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
    return this.http.get(this.apiUrl + '/api-mock?marque='
     + marque + '&modele=' + modele + '&annee=' + annee + '&finition=' + finition, httpOptions);
}
savecar(email: string, voiture: vehicule){
  console.log('ho', email);
  return  this.http.post(this.apiUrl + '/api-car/cars?email=' + email, voiture, httpOptions).pipe(
    catchError(this.handleError)
  );
}
}
