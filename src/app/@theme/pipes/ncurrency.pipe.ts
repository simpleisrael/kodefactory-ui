import {Pipe, PipeTransform} from '@angular/core';
declare const numeral: any;

@Pipe({
  name: 'ncurrency',
})
export class NCurrencyPipe implements PipeTransform {
  transform(price: number = 0, currency = '₦', digits: '0,0.00') {
    const nr = numeral(price).format(digits);
    return currency + nr;
  }
}
