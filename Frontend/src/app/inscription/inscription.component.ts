import { AuthentificationService } from './../services/authentification.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../models/User';
import {Router} from '@angular/router';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  currentUser: User;
  message: string;

  constructor(
     private formBuilder: FormBuilder,
     private authentificationservice: AuthentificationService,
     private router: Router) {
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      telephone: ['', Validators.required],
      numeroRue: ['', Validators.required],
      libelleRue: ['', Validators.required],
      codePostal: ['', Validators.required],
      ville: ['', Validators.required],
      statut: ['', Validators.required]
    });
  }
  get f() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    this.currentUser = {
      idUser: 0,
      email: this.f.email.value,
      password: this.f.password.value,
      telephone: this.f.telephone.value,
      numeroRue: this.f.numeroRue.value,
      libelleRue: this.f.libelleRue.value,
      codePostal: this.f.codePostal.value,
      ville: this.f.ville.value,
      nom: this.f.firstName.value,
      statut: this.f.statut.value,
      numSiret: null,
      numNIC: null
     };
    this.register(this.currentUser);
  }

  register(user: User) {
      console.log(user);
      this.authentificationservice.createUser(user).subscribe(
        createdUser => {
           if (createdUser.email != null ) {
            console.log(createdUser.nom + ' is connected');
            this.message = undefined ;
            this.router.navigateByUrl('/connexion');
           } else {
             this.message = 'Il existe deja un utilisateur avec ce mail';
             window.scrollTo(0, 0);
           }
        },
        err => console.log(err),
      );
  }
}
