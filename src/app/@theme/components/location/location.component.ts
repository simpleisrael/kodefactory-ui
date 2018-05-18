import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'ngx-location',
  styleUrls: ['./location.component.scss'],
  templateUrl: './location.component.html',
})
export class LocationComponent implements OnInit {

  @Output() onSelect = new EventEmitter<any>();
  @Input() address = '';
  @Input() longitude = 3.256;
  @Input() latitude = 6.611;

  zoom: number = 15;
  found = false;
  userSettings = {inputString: this.address};

  constructor() {}

  ngOnInit() {
    Object.assign(this.userSettings, {inputString: this.address});
    if (this.longitude && this.latitude) {
      this.found = true;
    }
  }

  componentCallback(event) {
    this.address = event.data.formatted_address;
    Object.assign(this.userSettings, {inputString: this.address});
    const {lat, lng} = event.data.geometry.location;
    this.latitude = lat;
    this.longitude = lng;
    this.found = true;

    const response = {lat: this.latitude, lng: this.longitude, address: this.address};
    this.onSelect.emit(response);
  }
}
