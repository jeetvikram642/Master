import { LightningElement } from 'lwc';

export default class LifeCycleParent extends LightningElement {


    constructor(){


        super();
        console.log('Inside Parent Constructor --')
    }


    connectedCallback(){

       console.log('Inside Parent Connected Callback --')

    }

     
     renderedCallback(){

        console.log('Inside Parent rendered Callback --')

     }


     name='Vikram3'

     changeHandler(event){

      this.name = event.target.value
  
     }

}