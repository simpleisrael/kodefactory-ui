
import {Component, Input, OnInit} from '@angular/core';
import {ViewCell} from 'ng2-smart-table';

@Component({
  template: `
    <div *ngIf="renderValue['hospitalType']">{{renderValue['hospitalType']['name']}}</div>
    <div *ngIf="!renderValue['hospitalType']">Not Assigned</div>
  `,
})
export class HospitalTypeRenderComponent implements ViewCell, OnInit {

  renderValue: any;

  @Input() value: number;
  @Input() rowData: any;


  ngOnInit() {
    this.renderValue = this.rowData;
  }

}
