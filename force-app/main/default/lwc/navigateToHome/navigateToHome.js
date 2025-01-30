import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation'
import {encodeDefaultFieldValues}  from 'lightning/pageReferenceUtils'
import FirstName from '@salesforce/schema/Contact.FirstName';
import LastName from '@salesforce/schema/Contact.LastName';
import LeadSource from '@salesforce/schema/Contact.LeadSource';

export default class NavigateToHome extends NavigationMixin(LightningElement) {



    NavigateHandler(){
       const cc= encodeDefaultFieldValues({

            FirstName: 'Jeet',
            LastName: 'Singh',
            LeadSource:'Other'
        })

        this[NavigationMixin.Navigate]({

            type:'standard__objectPage',
            attributes:{

                objectApiName:'Contact',
                actionName:'new'
            },
            state:{

                defaultFieldValues:cc
            }
        })

    }
}