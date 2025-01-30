import { LightningElement } from 'lwc';

export default class C2pModalComponent extends LightningElement {


    closeButton(){

      const clEvent=  new CustomEvent('close',{
        bubbles:true,
        detail:'closed successfully'
      })
       this.dispatchEvent(clEvent);
    }



    footerHandler(){


        alert('Vikram')
    }
}