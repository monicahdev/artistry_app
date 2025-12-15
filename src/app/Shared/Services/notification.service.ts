import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export interface Notification {
  type: 'SUCCESS' | 'ERROR' | 'INFO';
  message: string;
}

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  private notificationSubject = new Subject<Notification>();
  notifications$ = this.notificationSubject.asObservable();

  showSuccess(message: string) {
    this.notificationSubject.next({ type: 'SUCCESS', message });
  }

  showError(message: string) {
    this.notificationSubject.next({ type: 'ERROR', message });
  }

  showInfo(message: string) {
    this.notificationSubject.next({ type: 'INFO', message });
  }
}
