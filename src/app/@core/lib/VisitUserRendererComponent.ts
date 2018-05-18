
import {Component, Input, OnInit} from '@angular/core';
import {ViewCell} from 'ng2-smart-table';

@Component({
  template: `
    <div *ngIf="renderValue['user']">{{renderValue['user']['user']['fullName']}}</div>
  `,
})
export class VisitUserRendererComponent implements ViewCell, OnInit {

  renderValue: any;

  @Input() value: number;
  @Input() rowData: any;


  ngOnInit() {
    this.renderValue = this.rowData;
  }

}
