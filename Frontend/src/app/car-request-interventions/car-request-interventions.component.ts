import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { CarService } from '../services/car.service';
import { RequestInterventionService } from '../services/request-intervention.service';
import { RequestIntervention } from '../models/Intervention-request';
import { Car } from '../models/Car';
import { TypePanne } from '../models/TypePanne';
import { FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-car-request-interventions',
  templateUrl: './car-request-interventions.component.html',
  styleUrls: ['./car-request-interventions.component.css']
})
export class CarRequestInterventionsComponent implements OnInit {
  requestForm: FormGroup;
  idVehicule: number;
  car: Car;
  Panne: TypePanne;

  // tslint:disable-next-line:max-line-length
  constructor(private route: ActivatedRoute, private carService: CarService, private router: Router, private requestInterventionService: RequestInterventionService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.idVehicule = Number(this.route.snapshot.paramMap.get('id'));
    this.getInfosCar(this.idVehicule);
    this.getTypePanne();
    this.requestForm = this.formBuilder.group({
      libelleAnnonce : '',
      libelleTypePanne: '',
      descriptifAnnonce : '',
      ville : ''
    });
  }

  getInfosCar(idVehicule: number): void {
    this.carService.getInfosCar(idVehicule)
      .subscribe(
        (car) => {
          this.car = car ;
         }
      );
  }

  getTypePanne(): void {
    this.requestInterventionService.getTypePanne()
      .subscribe(
        (Panne) => {
          this.Panne = Panne ;
         }
      );
  }

  get f() {
    return this.requestForm.controls;
  }

  onSubmit() {
    const request = new RequestIntervention(
      new Date(),
      this.f.libelleAnnonce.value,
      this.f.descriptifAnnonce.value,
      this.f.ville.value
  );

    this.requestInterventionService.createRequestIntervention(this.idVehicule, request)
      .subscribe(res => {
    console.log(res);
  });

  }

  carView(): void {
    this.router.navigateByUrl('vehicule/' + this.idVehicule );
  }

}
