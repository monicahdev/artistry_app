import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  errorLog(error: any): void {
    console.error('[ERROR LOG]', error);
  }

  async managementToast(
    context: string,
    responseOK: boolean,
    errorResponse: any
  ): Promise<void> {
    console.log('[TOAST]', { context, responseOK, errorResponse });
  }
}
