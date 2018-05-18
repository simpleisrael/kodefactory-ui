
import {Component, Input, OnInit} from '@angular/core';
import {ViewCell} from 'ng2-smart-table';

@Component({
  template: `
    {{renderValue}}
  `,
})
export class ConfigRenderComponent implements ViewCell, OnInit {

  renderValue: string;

  @Input() value: string | number;
  @Input() rowData: any;

  ngOnInit() {
    switch (this.value) {
      case 'STRING' : this.renderValue = 'String'; break;
      case 'INTEGER' : this.renderValue = 'Integer'; break;
      case 'DOUBLE' : this.renderValue = 'Double'; break;
      case 'LONG' : this.renderValue = 'Long'; break;
      case 'DATE' : this.renderValue = 'Date'; break;
      case 'BOOLEAN' : this.renderValue = 'Boolean'; break;
      default: this.renderValue = 'String'
    }
  }

}
