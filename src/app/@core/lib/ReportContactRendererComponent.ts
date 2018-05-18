
import {Component, Input, OnInit} from '@angular/core';
import {ViewCell} from 'ng2-smart-table';

@Component({
  template: `
    <div *ngIf="renderValue['contact']">{{renderValue['contact']['name']}}</div>
    <div *ngIf="renderValue['contact']['speciality']">{{renderValue['contact']['speciality']['name']}}</div>
    <div *ngIf="renderValue['contact']['department']">{{renderValue['contact']['department']['name']}}</div>
    <div *ngIf="renderValue['contact']['unit']">{{renderValue['contact']['unit']['name']}}</div>
  `,
})
export class ReportContactRendererComponent implements ViewCell, OnInit {

  renderValue: any;

  @Input() value: number;
  @Input() rowData: any;


  ngOnInit() {
    this.renderValue = this.rowData;
  }

}
