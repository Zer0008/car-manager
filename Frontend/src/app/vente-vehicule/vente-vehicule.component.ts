import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {VenteVehiculeService} from "../services/vente-vehicule.service";

@Component({
  selector: 'app-vente-vehicule',
  templateUrl: './vente-vehicule.component.html',
  styleUrls: ['./vente-vehicule.component.css']
})
export class VenteVehiculeComponent implements OnInit {

  acquisitionVehicule: any;

  constructor(private venteVehiculeService: VenteVehiculeService) {
  }

  ngOnInit() {
    this.acquisitionVehicule = this.venteVehiculeService.acquisitions
  }

  onSubmit(form: NgForm){
    const vehicule = "";
    const dateAcquisition = "";

    const infos = form.value['complementInfos'];
    const price = form.value['price'];
    const emailUser = form.value['mailNewProp'];
    const justif = form.value['justificatifVente'];

    this.venteVehiculeService.updateAcquisition(1, infos, price, emailUser, justif, vehicule, dateAcquisition);
  }

  onSelect(){

  }

}
