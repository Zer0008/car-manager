import { AuthentificationService } from './../services/authentification.service';
import { Router } from '@angular/router';
import { Component, OnInit } from "@angular/core";
import * as _ from "lodash";
import { AnnoncesInterventionsService } from "../services/annonces-interventions.service";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";


const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json' ,
        'Access-Control-Allow-Origin': '*',
    })
};

@Component({
    selector: "app-annonces-intervention-list",
    templateUrl: "./annonces-intervention-list.component.html",
    styleUrls: ["./annonces-intervention-list.component.css"]
})
export class AnnoncesInterventionListComponent implements OnInit {
    Intervention: any[];
    private apiUrl = environment.apiUrl;

    constructor(private http: HttpClient,private annonceintervention: AnnoncesInterventionsService) {
    }

    onSearch(marque: string, modele: string,lieu:string) {

        if (marque === "Indifferent" || modele === "Indifferent"|| lieu==="" ) {
            // this.Intervention = this.panne;
        }

        if (marque !== "Indifferent") {
            this.Intervention = _.filter(this.Intervention, [
                "marqueVoiture",
                marque
            ]);
        }
        if (modele !== "Indifferent") {
            this.Intervention = _.filter(this.Intervention, [
                "modeleVoiture",
                modele
            ]);
        }
        if (lieu !== "") {
            this.Intervention = _.filter(this.Intervention, ["ville", lieu]);
        }
        console.log(this.Intervention);
    }

    ngOnInit() {
        this.annonceintervention.getInterventions().subscribe(res => {
            console.log(res);
            this.Intervention = res;
        });
    }
}
