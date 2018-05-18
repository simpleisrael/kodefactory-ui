
import {Component, Input, OnInit} from '@angular/core';
import {ViewCell} from 'ng2-smart-table';

@Component({
  template: `
    <div *ngIf="renderValue['pharmacyType']">{{renderValue['pharmacyType']['name']}}</div>
    <div *ngIf="!renderValue['pharmacyType']">Not Assigned</div>
  `,
})
export class PharmacyTypeRenderComponent implements ViewCell, OnInit {

  renderValue: any;

  @Input() value: number;
  @Input() rowData: any;


  ngOnInit() {
    this.renderValue = this.rowData;
  }

}
