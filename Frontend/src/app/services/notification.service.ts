import { Notification } from './../models/Notification';
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
export class NotificationService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getNotifications(idUser: number): any {
    return this.http.get<Notification[]>(this.apiUrl + '/api/user/' + idUser + '/Notifications', httpOptions).pipe(
      tap(( notifications: Notification[]) =>
        {
          console.log('notifications recus ' + notifications.length );
        }
      )
    );
  }
}
