import {Injectable} from '@angular/core';
import * as Rx from 'rxjs/Rx';

@Injectable()
export class EventsService {

  listeners: any;
  eventsSubject: any;
  events;

  globalChannel = {};

  constructor() {
    this.listeners = {};
    this.eventsSubject = new Rx.Subject();

    this.events = Rx.Observable.from(this.eventsSubject);

    this.events.subscribe(
      ({name, args}) => {

        if (this.listeners[name]) {
          for (const listener of this.listeners[name]) {
            if (this.listeners[name]) {
              listener(...args);
              break;
            }
          }
        }

        if (this.globalChannel[name]) {
          const subscriptions = this.getSubscriptions(name);
          // const len = subscriptions.length - 1;
          /*if (subscriptions[len]) {
            subscriptions[len].listener(...args);
          }*/
          subscriptions.forEach(subscription => {
            // console.log('About to fire subscription', subscription);
            subscription.listener(...args);
          });
        }

      });
  }

  on(name, listener) {
    if (!this.listeners[name]) {
      this.listeners[name] = [];
      this.listeners[name].push(listener);
    }

    if (this.listeners[name]) {
      this.listeners[name][0] = listener;
    }
  }


  broadcast(name, ...args) {
    this.eventsSubject.next({
      name,
      args,
    });
  }


  subscribe(eventComponent: EventComponent) {
    const subscriptions = this.getSubscriptions(eventComponent.subscription_name);
    const exist = subscriptions.find(subscription =>
      subscription.subscription_name === eventComponent.subscription_name &&
      subscription.component_id === eventComponent.component_id);

    // console.log('Exist: ', exist);
    if (!exist && eventComponent.subscription_name) {
      this.getSubscriptions(eventComponent.subscription_name).push(eventComponent);
    } else {
      // console.log('Event Already exist. Cannot add it to event subscriber');
    }
  }


  unsubscribe(eventComponent: EventComponent) {
    const subscriptions = this.getSubscriptions(eventComponent.subscription_name);
    const len = subscriptions.length;
    for (let i = 0; i < len; i++) {
      if (subscriptions[i].component_id === eventComponent.component_id
            && subscriptions[i].component_hash === eventComponent.component_hash) {
        subscriptions.splice(i, 1);
        break;
      }
    }
  }


  getSubscriptions(channel_key: string): any[] {
    if (!this.globalChannel[channel_key]) {
      this.globalChannel[channel_key] = [];
    }
    return this.globalChannel[channel_key];
  }

}


export interface EventComponent {
  component_id: string;
  component_hash: string;
  subscription_name: string;
  listener: any;
}
