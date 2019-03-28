import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Car } from '../models/Car';
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
export class CarService {
  private apiUrl =  environment.apiUrl;
  constructor(private http: HttpClient) {}

  /** GET: infos car in the server */
  getInfosCar(idVehicule: number): any {
    return this.http.get<Car[]>(this.apiUrl + '/api-car/car/' + idVehicule , httpOptions);
  }

}