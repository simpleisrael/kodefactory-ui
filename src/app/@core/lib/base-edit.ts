import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {Observable} from 'rxjs/Observable';
import {NotificationService} from '../utils/NotificationService';
import {EventsService} from '../events/event.service';

export abstract class BaseEditComponent {
  public entity: any = {};
  public title = '';
  public loading = false;
  constructor(public activeModal: NgbActiveModal,
              public notify: NotificationService,
              public eventService: EventsService,
              public EVENT_KEY: string) {

  }

  public closeModal() {
    this.activeModal.close();
  }

  save(observable: Observable<any>, successMessage) {
    this.loading = true;
    observable.subscribe(
      res => {
        this.notify.success('', res.message || successMessage);
        this.loading = false;
        this.closeModal();
        this.eventService.broadcast(this.EVENT_KEY, this.entity);
      },
      err => {
        this.loading = false;
      },
    );
  }
}
