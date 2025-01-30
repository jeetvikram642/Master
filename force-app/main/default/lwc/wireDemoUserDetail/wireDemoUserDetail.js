import { LightningElement,wire } from 'lwc';
import {getRecord} from 'lightning/uiRecordApi'
import id from '@salesforce/schema/User.Id'
import Field from '@salesforce/schema/AccountHistory.Field';

export default class WireDemoUserDetail extends LightningElement {

    userId =id

    userDetail
     
    @wire(getRecord,{recordId: '$userId', field:['User.Name','User.Email']})
    userDetailHandler(data,error){


    if(data){

        this.userDetail=data.fields
    }
     

    }
}