import { environment } from './../../environments/environment';
import { PagerService } from "./../services/pager.service";
import { AnnoncesService } from "./../services/annonces.service";
import { Vehicule } from "./../models/Voiture";
import { Component, OnInit } from "@angular/core";
import * as _ from "lodash";

@Component({
  selector: "app-annonces-vente-list",
  templateUrl: "./annonces-vente-list.component.html",
  styleUrls: ["./annonces-vente-list.component.css"]
})
export class AnnoncesVenteListComponent implements OnInit {
  private allItems: any[];

  currentAllItems: any[];

  // pager object
  pager: any = {};

  // paged items
  pagedItems: any[];

  constructor(
    private annoncesService: AnnoncesService,
    private pagerService: PagerService
  ) {
    this.getAnnoncesVente();
  }

  onSearch(modele: string, marque: string, carburant: string) {
    if (
      marque === "Indifferent" ||
      modele === "Indifferent" ||
      carburant === "Indifferent"
    ) {
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
    if (carburant !== "Indifferent") {
      this.currentAllItems = _.filter(this.currentAllItems, [
        "carburant",
        carburant
      ]);
    }
    this.setPage(1);
    //console.log(this.currentAllItems);
  }

  ngOnInit() {
    
  }

  getAnnoncesVente(): void {
    this.annoncesService.getAnnoncesVente().subscribe(annoncesVente => {
      this.allItems = annoncesVente;
      this.currentAllItems = this.allItems;
      console.log("annonces recuperees");
      this.setPage(1);
    });
  }

  getImage(file: string): string {
    if (file !== '') {
      return environment.apiUrl + file;
    } else {
      return environment.apiUrl + '/uploads/photo/inconnu.jpg';
    }
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
