import { Injectable } from '@angular/core';
import {BodyOutputType, Toast, ToasterConfig, ToasterService} from 'angular2-toaster';

@Injectable()
export class NotificationService {

  config: ToasterConfig;

  constructor(private toasterService: ToasterService) {}

  notifySuccess(title = '', message: string) {
    this.showToast('success', title, message);
  }

  notifyWarning(title = '', message: string) {
    this.showToast('warning', title, message);
  }

  notifyInfo(title = '', message: string) {
    this.showToast('info', title, message);
  }

  notifyError(title = '', message: string) {
    this.showToast('error', title, message);
  }




  private showToast(type: string, title: string, body: string) {
    const toast: Toast = {
      type: type,
      title: title,
      body: body,
      timeout: 5000,
      showCloseButton: true,
      bodyOutputType: BodyOutputType.TrustedHtml,
    };
    this.toasterService.popAsync(toast);
  }

  clearToasts() {
    this.toasterService.clear();
  }

}
