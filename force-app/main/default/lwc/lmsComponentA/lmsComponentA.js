import { LightningElement, wire } from 'lwc';
import SAMPLEMC from '@salesforce/messageChannel/SampleMessageChannel__c'
import { MessageContext,publish,subscribe } from 'lightning/messageService';
export default class LmsComponentA extends LightningElement {

inputValue
@wire(MessageContext)
context


handleKeyUp(event){
    console.log('handle vik'+this.inputValue)
this.inputValue =this.event.target.value


}


handlePublish(){

    message={

        recordData:{

           value:this.inputValue
        }
    }



    publish(this.context,SAMPLEMC,message);
}


}