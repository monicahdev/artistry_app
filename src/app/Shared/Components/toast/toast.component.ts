import { Component, OnInit } from '@angular/core';
import {
  Notification,
  NotificationService,
} from '../../../Shared/Services/notification.service';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
})
export class ToastComponent implements OnInit {
  notification: Notification | null = null;

  constructor(private notificationService: NotificationService) {}

  ngOnInit(): void {
    this.notificationService.notifications$.subscribe((notification) => {
      this.notification = notification;
      setTimeout(() => (this.notification = null), 3000);
    });
  }
}
