import { LightningElement } from 'lwc';

export default class C2pParentComponent extends LightningElement {

    msg
    showModal=false
    handleClick(event){

    this.showModal=true
  

    }


    closeHandler(event){

        this.showModal=false
      this.msg = event.detail
    }
}