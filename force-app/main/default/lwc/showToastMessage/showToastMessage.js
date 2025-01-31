import { LightningElement } from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent'

export default class ShowToastMessage extends LightningElement {

    handleToast(){


       var shEvent = new ShowToastEvent({

        title:'success',
            message:'Account Created',
            variant:'success'



        })

        this.dispatchEvent(shEvent);
    }


    testVikram(){


        
    }

}