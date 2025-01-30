import { LightningElement } from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';
import CONTACT_OBJECT from '@salesforce/schema/Contact'

export default class CreateRecordDemo extends LightningElement {

    formFields={}
    changeHandler(event){

  const {name,value} =event.target
  this.formFields[name]=value

    }

    createContact(){
       const recordInput={apiName:CONTACT_OBJECT.ObjectApiName,fields:this.formFields}
        createRecord(recordInput).then(result=>{
       console.log('Record Created');
       this.template.querySelector('form.createForm').reset()

        }).catch(error=>{

            console.log('Error while creting');
        })

    }


}