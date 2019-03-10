
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { Car } from '../models/car';

@Injectable({ providedIn: 'root' })

export class CarService {
    private Cars: Car[] = [];
    private CarsUpdated = new Subject<Car[]>();

    constructor(private http: HttpClient) {}


    private productUrl = 'http://localhost:8080/api/';
getCarMatricule(matricule: string){

    return this.http.get('http://localhost:8080/api/?matricule=' + matricule);
}
getCarMarque(marque: string,modele: string, annee: string){
    return this.http.get('http://localhost:8080/api/?marque=' + marque + '&modele=' + modele + '&annee=' + annee);
}
getcarview(matricule:string ,finition:string){
    return this.http.get('http://localhost:8080/api/?matricule=' + matricule + '&finition=' + finition);
}
getcarviewmarque(marque: string,modele: string, annee: string, finition: string) {
    return this.http.get('http://localhost:8080/api/?marque=' + marque + '&modele=' + modele + '&annee=' + annee + '&finition=' + finition);
}

}
