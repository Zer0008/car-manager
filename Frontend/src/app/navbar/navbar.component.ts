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
  userStorage: User;
  nom: string;
  constructor(private authentificationservice: AuthentificationService) {
    if (localStorage.getItem('user')) {
    this.userStorage = JSON.parse(localStorage.getItem('user'));
    this.nom = this.userStorage.nom ;
    } else {
      this.login();
    }
  }

  ngOnInit() {
    
  }

  logout(): void {
    this.user = undefined;
    localStorage.clear();
  }

  login(): void {
    this.authentificationservice.getUser().subscribe(
      userRegistered => {
        if (userRegistered != null) {
          this.user = userRegistered;
          this.nom = this.user.nom ;
          console.log('utilisateur connecte ' + this.user.idUser);
        }
      },
      err => {
        console.log(err);
      }
    );
  }
  
}
