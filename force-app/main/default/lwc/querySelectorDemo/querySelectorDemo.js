import { LightningElement } from 'lwc';

export default class QuerySelectorDemo extends LightningElement {

userDetails = ["vik","Arz"]


    fetchDetailHandler(){

       const elem = this.template.querySelector('h1');
       elem.style.border="1px solid red";
       console.log('Vikram '+elem.innerText);
      const lpElem = this.template.querySelectorAll('.Jeet');

           Array.from(lpElem).forEach(item => {
            console.log('Vikram singh '+item.innerText);
          //  lpElem.setAttribute("title",item.innerText)
           });


           const childElem =this.template.querySelector('.child');
           childElem.innerHTML="Check Warning";
    }

}