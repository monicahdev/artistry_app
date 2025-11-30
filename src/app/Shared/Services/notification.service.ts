import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  showInfo(message: string): void {
    console.info('[INFO]', message);
  }

  showSuccess(message: string): void {
    console.log('[SUCCESS]', message);
  }

  showError(message: string): void {
    console.error('[ERROR]', message);
  }
}
