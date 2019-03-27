import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { tap } from "rxjs/operators";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json' ,
    'Access-Control-Allow-Origin': '*',
  })
};

@Injectable({
  providedIn: 'root'
})
export class AnnoncesService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getAnnoncesVente(): any {
      return this.http.get<any>(this.apiUrl + '/api-annonces/vente', httpOptions).pipe(
        tap(( annoncesVente: any[]) =>
          {
            console.log('intervention recus ' + annoncesVente.length );
          }
        )
      );
  }
}
