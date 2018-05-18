
import {Component, Input, OnInit} from '@angular/core';
import {ViewCell} from 'ng2-smart-table';

@Component({
  template: `
    <div *ngFor="let contact of renderValue['contacts']">
      <div *ngIf="contact">{{contact['name']}}</div>
      <div *ngIf="contact['speciality']">{{contact['speciality']['name']}}</div>
      <div *ngIf="contact['department']">{{contact['department']['name']}}</div>
      <div *ngIf="contact['unit']">{{contact['unit']['name']}}</div>
      <hr/>
    </div>
  `,
})
export class ReportContactsRendererComponent implements ViewCell, OnInit {

  renderValue: any;

  @Input() value: number;
  @Input() rowData: any;


  ngOnInit() {
    this.renderValue = this.rowData;
  }

}
