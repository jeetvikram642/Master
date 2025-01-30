import { LightningElement } from 'lwc';

export default class DynamicCSS extends LightningElement {


    percentage = 10;


    get percentHandler(){


        return `width:${this.percentage}%`
    }
}