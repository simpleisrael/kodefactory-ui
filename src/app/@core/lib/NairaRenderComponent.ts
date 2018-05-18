
import {Component, Input, OnInit} from '@angular/core';
import {ViewCell} from 'ng2-smart-table';

@Component({
  template: `
    {{renderValue | ncurrency}}
  `,
})
export class NairaRenderComponent implements ViewCell, OnInit {

  renderValue: number;

  @Input() value: number;
  @Input() rowData: any;

  ngOnInit() {
    this.renderValue = this.value
  }

}
