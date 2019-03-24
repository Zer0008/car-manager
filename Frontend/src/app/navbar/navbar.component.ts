import { Router } from "@angular/router";
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
  constructor(
    private authentificationservice: AuthentificationService,
    private router: Router,
  ) {
    if (localStorage.getItem("user")) {
      this.user = JSON.parse(localStorage.getItem("user"));
      this.nom = this.user.nom;
      this.statut = this.user.statut;
      console.log("init by localstorage " + this.nom);
    } else {
      this.login();
    }
    console.log("constructeur appelé");
  }

  ngOnInit() {
    console.log("ngOnit appele");
  }

  logout(): void {
    this.user = undefined;
    this.statut = undefined;
    localStorage.clear();
    this.router.navigateByUrl("/connexion");
  }

  login(): void {
    this.authentificationservice.currentUser.subscribe(
      userRegistered => {
        if (userRegistered != null) {
          this.user = userRegistered;
          this.nom = this.user.nom;
          this.statut = this.user.statut;
          console.log("init by service " + this.nom);
        }
      },
      err => {
        console.log(err);
      }
    );
  }
}
