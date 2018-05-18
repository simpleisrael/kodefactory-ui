
import {Component, Input, OnInit} from '@angular/core';
import {ViewCell} from 'ng2-smart-table';

@Component({
  template: `
    {{currency}} &nbsp; {{amount}}
  `,
})
export class PurchasedRendererComponent implements ViewCell, OnInit {

  renderValue: any;

  @Input() value: number;
  @Input() rowData: any;

  currency;
  amount;

  ngOnInit() {
    const {currency, exchangeAmount} = this.rowData;
    this.currency = currency;
    this.amount = exchangeAmount;
    this.renderValue = {currency, exchangeAmount};
  }

}
