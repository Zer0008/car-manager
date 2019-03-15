import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import {environment} from "../../environments/environment";
import {tap} from "rxjs/operators";
import {User} from "../models/User";
import { AuthentificationService} from "./authentification.service";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl =  environment.apiUrl;

  constructor(private http: HttpClient, private authentificationservice: AuthentificationService) { }

  updateUser(email: string, user:any): any {
      console.log('service maj appele');
    return this.http.put<any>(this.apiUrl + '/api/user?email=' + email, user, httpOptions).pipe(
        tap((newUser: User) =>
            {
              if (newUser.email != null) {
                console.log(`Update User w/ id=${newUser.idUser}`);
                    this.authentificationservice.setUser(newUser);
              } else {
                console.log('impossible de faire la mise a jour');
              }
            }
        )
    );
  }
}
