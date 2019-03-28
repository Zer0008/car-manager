import { Notification } from './../models/Notification';
import { NotificationService } from './../services/notification.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  user: any ;
  notifications: Notification[];
  constructor(private notificationService: NotificationService) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.getNotifications(this.user.idUser);
  }

  getNotifications(idUser: number): void {
    this.notificationService.getNotifications(idUser).subscribe(
      (notifications) => {
        this.notifications = notifications ;
        console.log('notifications recues');
      }
    );
  }

  toDate(date: Date): string {
    const d = new Date(date);
    return d.toLocaleDateString() + '  ' + d.toLocaleTimeString() ;
  }

  deletenotif(item: any): void{
    this.notifications.splice(this.notifications.indexOf(item), 1);
  }

}
