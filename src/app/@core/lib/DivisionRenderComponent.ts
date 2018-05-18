
import {Component, Input, OnInit} from '@angular/core';
import {ViewCell} from 'ng2-smart-table';

@Component({
  template: `
    <div *ngIf="renderValue['division']">{{renderValue['division']['name']}}</div>
    <div *ngIf="!renderValue['division']">Not Assigned</div>
  `,
})
export class DivisionRenderComponent implements ViewCell, OnInit {

  renderValue: any;

  @Input() value: number;
  @Input() rowData: any;


  ngOnInit() {
    this.renderValue = this.rowData;
  }

}
