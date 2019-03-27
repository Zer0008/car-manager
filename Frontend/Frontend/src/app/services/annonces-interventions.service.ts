import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { tap } from "rxjs/operators";
import {Intervention} from "../models/Intervention";

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json' ,
        'Access-Control-Allow-Origin': '*',
    })
};

@Injectable({
    providedIn: 'root'
})
export class AnnoncesInterventionsService {
    private apiUrl = environment.apiUrl;

    constructor(
        private http: HttpClient,
    ) { }


    getInterventions(): any {
        console.log("GET");
        return this.http.get(this.apiUrl + "/api-annonces/interventions", httpOptions)
    }
}
