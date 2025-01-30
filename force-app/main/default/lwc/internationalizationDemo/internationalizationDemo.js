import { LightningElement } from 'lwc';
import LOCALE from '@salesforce/i18n/locale'
import CURRENCY from '@salesforce/i18n/currency'

export default class InternationalizationDemo extends LightningElement {

  number= 65.5


  formattedNum = new Intl.NumberFormat(LOCALE,{

    style:'currency',
    currency:CURRENCY,
    currencyDisplay:'symbol'
  }).format(this.number);

}