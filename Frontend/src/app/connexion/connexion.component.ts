import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthentificationService } from "../services/authentification.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-connexion",
  templateUrl: "./connexion.component.html",
  styleUrls: ["./connexion.component.css"]
})
export class ConnexionComponent implements OnInit {
  state: boolean;
  registerForm: FormGroup;
  submitted = false;
  auth: boolean;
  constructor(
    private router: Router,
    private authentificationservice: AuthentificationService,
    private formBuilder: FormBuilder
  ) {
    this.state = true;
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(6)]]
    });
  }

  get f() {
    return this.registerForm.controls;
  }

  onSubmit(email: string, password: string, statut: string) {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    this.authentificationservice
      .registerUser(email, password, statut)
      .subscribe(
        (user) => {
          if (user.email != null) {
            this.auth = true;
            this.router.navigateByUrl('/home');
          } else {
            this.auth = false;
          }
        }
        );
  }

  changeState() {
    if (this.state === true) {
      this.state = false;
    } else {
      this.state = true;
    }
  }
  gotoRegister() {
    this.router.navigateByUrl('/inscription');
  }
}
