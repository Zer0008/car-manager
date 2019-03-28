import { User } from "./../models/User";
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { tap } from "rxjs/operators";
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*"
  })
};

@Injectable({
  providedIn: "root"
})
export class UserService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  updateUser(email: string, user: any): any {
    console.log("service maj appele");
    return this.http
      .put<any>(this.apiUrl + "/api/user?email=" + email, user, httpOptions)
      .pipe(
        tap((state: number) => {
          if (state !== 0) {
            console.log(`Update User w/ name=${user.name}`);
          } else {
            console.log("impossible de faire la mise a jour");
          }
        })
      );
  }

  getCar(email: string, statut: any): any {
    console.log("GET");
    return this.http.get(
      this.apiUrl + "/api-car/cars?email=" + email + "&statut=" + statut,
      httpOptions
    );
  }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl + "/api/user");
  }

  removeCar(): any {}

  setPasswordUser(email: string, password: string): any {
    return this.http
      .put<any>(
        this.apiUrl + "/api/user/resetPassword?email=" + email,
        { password: password },
        httpOptions
      )
      .pipe(
        tap(() => {
          console.log("updated user email = " + email);
        })
      );
  }
}
