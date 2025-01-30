import { LightningElement,track } from 'lwc';

export default class HelloWorld extends LightningElement {



    firstName="Vikram";
    title="Sales VP";

  address={

        country:"India",
        city:"Bilaspur"
    }

    changeTitle(event){

this.title =event.target.value
    }


    changeCity(event){
this.address={...this.address,"city":event.target.value}

    }



users=["vikram","Arzoyi"]

get firstUser(){

  return this.users[0]

}

num1 =2;
num2 =3;

get multiply(){


    return this.num1*this.num2
}

isInvisible=false;

handleClick(event){

this.isInvisible=true;
}



carList=["Ford","Audi","range"]


ceoList=[
    {id:1,
        name:"Sundar"
    },
    {id:2,
        name:"vikram"
    }]

}