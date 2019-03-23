import { AuthentificationService } from './../services/authentification.service';
import { Component, OnInit } from "@angular/core";
import { UserService } from "../services/user.service";
import { AuthentificationService } from "./authentification.service";

@Component({
  selector: "app-view-user",
  templateUrl: "./view-user.component.html",
  styleUrls: ["./view-user.component.css"]
})
export class ViewUserComponent implements OnInit {
  user: any;
  oldEmail: string;
  private $scope: any;
  disabled = true;
  private actif = false;
  /*  registerForm: FormGroup;
  currentUser: User;
  submitted = false;*/

  constructor(
    private userservice: UserService,
    private authentificationService: AuthentificationService,
  ) // private formBuilder: FormBuilder
  {
    this.user = JSON.parse(localStorage.getItem("user"));
    this.oldEmail = this.user.email;
    console.log(this.user);
  }

  onmodifier() {
    this.disabled = false;
    this.actif = true;
  }

  annuler() {
    this.disabled = true;
    this.actif = false;
  }

  valider() {
    console.log("bouton valide appuye");
    this.userservice
      .updateUser(this.oldEmail, this.user)
      .subscribe(
        () =>
        {
          console.log(this.user) ;
          this.disabled = true;
          this.actif = false;
          this.authentificationService.setUser(this.user) ;
        }
      );
  }

  ngOnInit() {
    /*    this.registerForm = this.formBuilder.group({
      nom: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telephone: ['', Validators.required],
      numeroRue: ['', Validators.required],
      libelleRue: ['', Validators.required],
      codePostal: ['', Validators.required],
      ville: ['', Validators.required],
      statut: ['', Validators.required]*/
    /*  });*/
  }
  /*
  get f() {
    return this.registerForm.controls;
  }*/

  /*  onSubmit() {
    console.log("Bonjour");
    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    this.currentUser = {
      idUser: this.user.idUser,
      email: this.f.email.value,
      telephone: this.f.telephone.value,
      password: this.user.password,
      numeroRue: this.f.numeroRue.value,
      libelleRue: this.f.libelleRue.value,
      codePostal: this.f.codePostal.value,
      ville: this.f.ville.value,
      nom: this.f.firstName.value,
      statut: this.f.statut.value,
      numSiret: this.user.numSiret,
      numNIC: this.user.numNIC,
    };
    console.log(this.currentUser.nom);
    this.register(this.currentUser);
  }
  register(user: User) {
    console.log(user);
  }*/
}
