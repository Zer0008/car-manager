import { AnnoncesService } from './../services/annonces.service';
import { PagerService } from "./../services/pager.service";
import { Component, OnInit } from "@angular/core";
import * as _ from "lodash";
import {environment} from "../../environments/environment";


@Component({
    selector: "app-annonces-intervention-list",
    templateUrl: "./annonces-intervention-list.component.html",
    styleUrls: ["./annonces-intervention-list.component.css"]
})
export class AnnoncesInterventionListComponent implements OnInit {
    Intervention: any[];
    user: any;
    private allItems: any[];

  currentAllItems: any[];

  // pager object
  pager: any = {};

  // paged items
  pagedItems: any[];
    constructor( private annoncesService: AnnoncesService,  private pagerService: PagerService) {
    }

    onSearch(marque: string, modele: string,lieu:string) {

        if (marque === "Indifferent" || modele === "Indifferent"|| lieu==="" ) {
            // this.Intervention = this.panne;
            this.currentAllItems = this.allItems;
        }

        if (marque !== "Indifferent") {
            this.currentAllItems = _.filter(this.currentAllItems, [
                "marqueVoiture",
                marque
            ]);
        }
        if (modele !== "Indifferent") {
            this.currentAllItems = _.filter(this.currentAllItems, [
                "modeleVoiture",
                modele
            ]);
        }
        if (lieu !== "") {
            this.currentAllItems = _.filter(this.currentAllItems, ["ville", lieu]);
        }
        this.setPage(1);
    }

    ngOnInit() {
        this.user = JSON.parse(localStorage.getItem("user"));
        this.annoncesService.getInterventions().subscribe(res => {
            console.log(res);
            this.allItems = res ;
            this.currentAllItems = this.allItems;
            this.setPage(1);
        });
    }

    setPage(page: number) {
        // get pager object from service
        this.pager = this.pagerService.getPager(this.currentAllItems.length, page);
        console.log(this.pager);
    
        // get current page of items
        this.pagedItems = this.currentAllItems.slice(
          this.pager.startIndex,
          this.pager.endIndex + 1
        );
      }
}