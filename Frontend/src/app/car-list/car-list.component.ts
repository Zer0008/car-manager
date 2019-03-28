import { environment } from "./../../environments/environment";
import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { UserService } from "../services/user.service";

@Component({
  selector: "app-car-list",
  templateUrl: "./car-list.component.html",
  styleUrls: ["./car-list.component.css"]
})
export class CarListComponent implements OnInit {
  vehicules: any[];
  user: any;

  private router: any;
  private statut: any;
  constructor(
    private route: Router,
    private userservice: UserService,
  ) {
    this.user = JSON.parse(localStorage.getItem("user"));
  }

  ngOnInit() {
    this.userservice
      .getCar(this.user.email, this.user.statut)
      .subscribe(res => {
        console.log(res);
        this.vehicules = res;
      });
  }

  addCar(): void {
    this.route.navigateByUrl("/vehicules/new");
  }

  deleteCar(vehicule: any): void {
    this.vehicules.splice(this.vehicules.indexOf(vehicule), 1);
  }

  getImage(file: string): string {
    if (file !== '') {
      return environment.apiUrl + file;
    } else {
      return environment.apiUrl + '/uploads/photo/inconnu.jpg';
    }
  }

}
