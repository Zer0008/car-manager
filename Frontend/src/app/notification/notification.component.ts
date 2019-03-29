import { Notification } from "./../models/Notification";
import { NotificationService } from "./../services/notification.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-notification",
  templateUrl: "./notification.component.html",
  styleUrls: ["./notification.component.css"]
})
export class NotificationComponent implements OnInit {
  user: any;
  notifications: Notification[];
  constructor(private notificationService: NotificationService) {}

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem("user"));
    this.getNotifications(this.user.idUser);
  }

  getNotifications(idUser: number): void {
    this.notificationService
      .getNotifications(idUser)
      .subscribe(notifications => {
        console.log(notifications);
        this.affectation(notifications);
      });
  }

  affectation(tab: any): void {
    if (tab[0].idNotification != null) {
      this.notifications = tab;
    } else {
      this.notifications = [];
    }
    console.log(this.notifications.length);
  }

  toDate(date: Date): string {
    const d = new Date(date);
    return d.toLocaleDateString() + "  " + d.toLocaleTimeString();
  }
}
