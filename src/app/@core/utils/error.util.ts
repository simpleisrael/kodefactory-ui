import {NotificationService} from './notification.service';

export const handleError = (err, notificationService: NotificationService) => {
  if (err && err['message']) {
    notificationService.notifyError('Error', err['message']);
  }
};
