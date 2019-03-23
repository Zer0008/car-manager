import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VenteVehiculeService {

  acquisitions: [
      {
        id: 0,
        infos: "",
        price: "",
        proprietaire: "",
        justif: "",
        vehicule: "",
        date: ""
      }
      ];
  constructor() { }

  updateAcquisition(id: number, infos: string, price: string, email: string, justif: string, vehicule: string, date: string){
    const acquisitionObject = {
      id: 0,
      infos: "",
      price: "",
      proprietaire: "",
      justif: "",
      vehicule: "",
      date: ""
    }

    acquisitionObject.id = id;
    acquisitionObject.infos = infos;
    acquisitionObject.price = price;
    acquisitionObject.proprietaire = email;
    acquisitionObject.justif = justif;
    acquisitionObject.vehicule = vehicule;
    acquisitionObject.date = date;

    this.acquisitions.push();
  }

  uploadFile(){

  }

}