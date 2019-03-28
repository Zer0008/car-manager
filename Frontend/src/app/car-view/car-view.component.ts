import { Car } from './../models/Car';
import { Component, OnInit } from '@angular/core';
import { CarService } from './../services/car.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NumberFormatStyle } from '@angular/common';

@Component({
  selector: 'app-car-view',
  templateUrl: './car-view.component.html',
  styleUrls: ['./car-view.component.css']
})
export class CarViewComponent implements OnInit {
  car: Car;
  result: any;
  idVehicule: number;
   // tslint:disable-next-line:no-inferrable-types
  justif: string;
  // tslint:disable-next-line:no-inferrable-types
  justif2: string = '/assets/photo-1553339619324.jpg';
  constructor(private carService: CarService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.idVehicule = Number(this.route.snapshot.paramMap.get('id'));
    this.getInfosCar(this.idVehicule);
  }

  getInfosCar(idVehicule: number): void {
    this.carService.getInfosCar(idVehicule)
      .subscribe(
        (res) => {
          this.car = res;
          this.justif = res[0].justificatif;
          console.log(this.justif);
         } 
      );
  }

  onFileSelected() {
    const $img: any = document.querySelector('#file');

    if (typeof (FileReader) !== 'undefined') {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.justif = e.target.result;
      };

      reader.readAsArrayBuffer($img.files[0]);
    }
  }

  requestInterventionCar(): void {
    this.router.navigateByUrl('vehicule/' + this.idVehicule + '/requestInterventions');
  }
  interventionCar(): void {
    this.router.navigateByUrl('vehicule/' + this.idVehicule + '/interventions');
  }
  venteCar(): void {
    this.router.navigateByUrl('vehicule/' + this.idVehicule + '/vente-vehicule');
  }
  paramsVente(): void {
    this.router.navigateByUrl('vehicule/' + this.idVehicule + '/parametre-vente');
  }

}
