import {Component, Input, OnInit} from '@angular/core';
import {ViewCell} from 'ng2-smart-table';

@Component({
  selector: 'ngx-config-value-render',
  template: `
    <nb-checkbox *ngIf="renderValue === 'boolean'" name="checkbox" [(ngModel)]="value" disabled="true"></nb-checkbox>
    <div *ngIf="renderValue === 'object'">{{value}}</div>
    <div *ngIf="renderValue === 'any'">{{value}}</div>
  `,
})
export class ConfigValueRenderComponent implements ViewCell, OnInit {


  renderValue: string;

  @Input() value: string | number;
  @Input() rowData: any;

  constructor() {}

  ngOnInit(): void {
    // console.log(this.value, typeof this.value);
    switch (typeof this.value) {
      case 'boolean' : this.renderValue = 'boolean'; break;
      // case 'string' : this.renderValue = 'string'; break;
      // case 'number' : this.renderValue = 'number'; break;
      default: this.renderValue = 'any';
    }
  }

}
