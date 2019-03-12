import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { User } from "../models/User";
import { Observable, Subject } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";
import { environment } from '../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: "root"
})
export class AuthentificationService {
  private apiUrl =  environment.apiUrl;
  private userAuth = new Subject<User>();
  constructor(private http: HttpClient) {}

  /** POST: user in the server */
  createUser(user: User): Observable<User> {
    return this.http
      .post<User>(this.apiUrl + '/auth/register', user, httpOptions)
      .pipe(
        tap((newUser: User) =>
          { 
            if (newUser.email != null) {
              console.log(`added hero w/ id=${newUser.idUser}`),
              this.setUser(newUser);
            } else {
              console.log('utilisateur existant');
            }
          }
        )
      );
  }

  registerUser(emailValue: string, passwordValue: string, statutValue: string ): Observable<any> {
    console.log(emailValue);
    const userConnection = { 'email': emailValue, 'password': passwordValue, 'statut': statutValue };
    console.log(userConnection);
    return this.http.post<any>(this.apiUrl + '/auth/signin', userConnection, httpOptions).pipe(
      tap(
        (registerUser: any) => {
          if (registerUser.email == null) {
            console.log('identifiants incorrects');
          } else {
            console.log(`connected User  name=${registerUser.nom}`);
            this.setUser(registerUser);
          }
        }
      )
    );
  }

  setUser(user: any): void {
    localStorage.setItem('user', JSON.stringify(user));
    this.userAuth.next(user);
  }

  getUser(): Observable<any> {
    return this.userAuth.asObservable();
  }
}
