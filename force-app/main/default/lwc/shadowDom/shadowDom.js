import { LightningElement } from 'lwc';

export default class ShadowDom extends LightningElement {


    renderedCallback(){

      const style =  document.createElement('style')
      style.innerText =`c-shadow-dom .slds-button{
      
       color: red;
      
      }`


      this.template.querySelector('lightning-button').appendChild(style)
    }
}