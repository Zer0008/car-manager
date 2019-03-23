import { Car } from './../models/Car';
import { Component, OnInit } from '@angular/core';
import { CarService } from './../services/car.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-car-view',
  templateUrl: './car-view.component.html',
  styleUrls: ['./car-view.component.css']
})
export class CarViewComponent implements OnInit {
  car: Car[];
  immatriculation: string;
   // tslint:disable-next-line:no-inferrable-types
  justificatif: string;
   
  constructor(private carService: CarService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.immatriculation = this.route.snapshot.paramMap.get('id');
    this.getInfosCar(this.immatriculation);
  }

  getInfosCar(immatriculation: string): void {
    this.carService.getInfosCar(immatriculation)
      .subscribe(
        (car) => {
          this.car = car ;
          console.log(car);
         }
      );
  }

  onFileSelected() {
    const $img: any = document.querySelector('#file');
  
    if (typeof (FileReader) !== 'undefined') {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.justificatif = e.target.result;
      };
  
      reader.readAsArrayBuffer($img.files[0]);
    }
  }

  requestInterventionCar(): void {
    this.router.navigateByUrl('vehicule/' + this.immatriculation + '/requestInterventions');
  }
  interventionCar(): void {
    this.router.navigateByUrl('vehicule/' + this.immatriculation + '/interventions');
  }
  venteCar(): void {
    this.router.navigateByUrl('vehicule/' + this.immatriculation + '/vente-vehicule');
  }
  paramsVente(): void {
    this.router.navigateByUrl('vehicule/' + this.immatriculation + '/parametre-vente');
  }

}
