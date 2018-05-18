
import {Component, Input, OnInit} from '@angular/core';
import {ViewCell} from 'ng2-smart-table';

@Component({
  template: `
    <div *ngIf="renderValue['division']">{{renderValue['division']['name']}}</div>
  `,
})
export class ReportDivisionRendererComponent implements ViewCell, OnInit {

  renderValue: any;

  @Input() value: number;
  @Input() rowData: any;


  ngOnInit() {
    this.renderValue = this.rowData;
  }

}
