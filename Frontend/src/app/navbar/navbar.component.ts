import { User } from "./../models/User";
import { Component, OnInit } from "@angular/core";
import { AuthentificationService } from "../services/authentification.service";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
  user: any;
  nom: string;
  statut: string;
  constructor(private authentificationservice: AuthentificationService) {
    if (localStorage.getItem('user')) {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.nom = this.user.nom ;
    this.statut = this.user.statut;
    } else {
      this.login();
    }
  }

  ngOnInit() {
    
  }

  logout(): void {
    this.user = undefined;
    this.statut = undefined ;
    localStorage.clear();
  }

  login(): void {
    this.authentificationservice.getUser().subscribe(
      userRegistered => {
        if (userRegistered != null) {
          this.user = userRegistered;
          this.nom = this.user.nom ;
          this.statut = this.user.statut ;
          console.log('utilisateur connecte ' + this.user.statut);
        }
      },
      err => {
        console.log(err);
      }
    );
  }
  
}
