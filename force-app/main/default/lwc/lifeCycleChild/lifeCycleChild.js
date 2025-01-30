import { LightningElement } from 'lwc';

export default class LifeCycleChild extends LightningElement {




    
    constructor(){


        super();
        console.log('Inside child Constructor --')
    }


    connectedCallback(){

       console.log('Inside child Connected Callback --')

    }

     
     renderedCallback(){

        console.log('Inside child rendered Callback --')


     }

}