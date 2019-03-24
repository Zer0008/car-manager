import { UserService } from './../services/user.service';
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
  changePassword: boolean ;
  registerForm: FormGroup;
  submitted = false;
  submittedReset = false ;
  confirm = false ;
  auth: boolean;
  constructor(
    private router: Router,
    private authentificationservice: AuthentificationService,
    private formBuilder: FormBuilder,
    private userservice: UserService,
  ) {
    this.state = true;
    this.changePassword = false ;
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
            this.authentificationservice.setUser(user);
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
  
  resetPassword(password: string, passwordReset: string, email: string) {
    this.submittedReset = true;
    if (password === passwordReset && password !== '') {
      this.confirm = true ;
      this.userservice.setPasswordUser(email, password).subscribe(
        () => {
          console.log('update User');
          this.state = true;
          this.changePassword = true ;
        }
      );
    }
  }

}
