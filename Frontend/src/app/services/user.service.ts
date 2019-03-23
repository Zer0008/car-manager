import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { tap } from "rxjs/operators";
import { User } from "../models/User";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json' ,
    'Access-Control-Allow-Origin': '*',
  })
};

@Injectable({
  providedIn: "root"
})
export class UserService {
  private apiUrl = environment.apiUrl;

  constructor(
    private http: HttpClient,
  ) {}

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
}
