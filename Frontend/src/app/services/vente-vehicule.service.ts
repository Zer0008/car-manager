import { Injectable } from '@angular/core';
import {AcquisitionVoiture} from "../models/AcquisitionVoiture";
import {Observable, Subject} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {User} from "../models/User";
import {tap} from "rxjs/operators";

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json' ,
        'Access-Control-Allow-Origin': '*',
    })
};

@Injectable({
  providedIn: 'root'
})
export class VenteVehiculeService {
    private apiUrl = environment.apiUrl;
    private acquisitions: AcquisitionVoiture[];
    users: User[];

    constructor(
        private httpClient: HttpClient
    ){}

    getUser(): Observable<User[]>{
        return this.httpClient.get<User[]>(this.apiUrl + "/api/user");
    }

    putTransfert(idAcheteur: number, idReceveur: number, idVehicule: number, dateAcquisition: Date, justificatif: any): any{
        console.log("Service maj acquisition appelé");
        return this.httpClient.put<any>(this.apiUrl+"/api-car/transfertVehicule?idAcheteur="+idAcheteur+"&idReceveur="+idReceveur+"&idVehicule="+idVehicule+"&dateAcquisition="+dateAcquisition, {'justificatifVente': justificatif}).pipe(
            tap((state: number) => {
                if (state !== 0) {
                    console.log(`Update acquisition`);
                } else {
                    console.log("impossible de faire la mise a jour");
                }
            })
        );
    }
}