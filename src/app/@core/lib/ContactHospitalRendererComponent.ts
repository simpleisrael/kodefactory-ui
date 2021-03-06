
import {Component, Input, OnInit} from '@angular/core';
import {ViewCell} from 'ng2-smart-table';

@Component({
  template: `
    <div>{{renderValue['hospital']['name']}}</div>
  `,
})
export class ContactHospitalRendererComponent implements ViewCell, OnInit {

  renderValue: any;

  @Input() value: number;
  @Input() rowData: any;


  ngOnInit() {
    this.renderValue = this.rowData;
  }

}
