
import {Component, Input, OnInit} from '@angular/core';
import {ViewCell} from 'ng2-smart-table';

@Component({
  template: `
    {{renderValue}}
  `,
})
export class DateRenderComponent implements ViewCell, OnInit {

  renderValue: string;

  @Input() value: string | number;
  @Input() rowData: any;

  ngOnInit() {
    const date = new Date();
    date.setTime(+this.value);
    this.renderValue = date.toLocaleString();
  }

}
