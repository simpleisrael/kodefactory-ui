
import {Component, Input, OnInit} from '@angular/core';
import {ViewCell} from 'ng2-smart-table';

@Component({
  template: `
    <strong>Account Number: </strong> <br/> {{renderValue['accountNumber' || 'NA']}} <br/>
    <strong>Account Name: </strong> <br/> {{renderValue['accountName'] || 'NA'}} <br/>
    <strong>Account Type: </strong> <br/> {{renderValue['accountType' || 'NA']}} <br/>
    <strong>Sort Code: </strong> <br/> {{renderValue['sortCode'] || 'NA'}} <br/>
    <strong>Bank: </strong> <br/>{{renderValue['bank'] || 'NA'}}
  `,
})
export class BankDetailsRendererComponent implements ViewCell, OnInit {

  renderValue: any;

  @Input() value: number;
  @Input() rowData: any;


  ngOnInit() {
    this.renderValue = this.rowData;
  }

}
