import { Injectable } from '@angular/core';
import {AcquisitionVoiture} from "../models/AcquisitionVoiture";
import {Subject} from "rxjs";
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
    acquisitionSubject = new Subject<AcquisitionVoiture[]>();

    constructor(
        private http: HttpClient
    ){}

    emitAcquisition(){
        this.acquisitionSubject.next(this.acquisitions.slice());
    }

    doTransfert(acquisition: AcquisitionVoiture){
        this.acquisitions.push(acquisition);
        this.emitAcquisition();
    }

    getUser(email: string): any{
        console.log("Liste utilisateur");
        return this.http.get<any>(this.apiUrl + "/api/user", httpOptions).pipe(
            tap(( userlist: any[]) =>
                {
                    console.log('utilisateurs recus ' + userlist.length );
                }
            )
        );
    }
}