import { LightningElement } from 'lwc';

export default class QuizApp extends LightningElement {

 quizList=[{

id:"Question1",
question:"What is your fav Color",
answer:{
    a:"blue",
    b:"red",
    c:"green"
} ,
correctAns:"c"
 },{

    id:"Question2",
    question:"What is your city name",
    answer:{
        a:"Calgary",
        b:"Edmon",
        c:"Tornoto"} ,
    correctAns:"a"
     }

]

get allNotSelected(){

    return !(Object.keys(this.selected).length===this.quizList.length)
}

selected={}
changeHandler(event){
 
    console.log("name",event.target.name)
    console.log("value",event.target.value)
    const {name,value}=event.target
    this.selected ={...this.selected,[name]:value}
}

correctAnswer=0

handleSubmit(event){


    event.preventDefault()
    console.log("tTest")
    let correct = this.quizList.filter(item=>this.selected[item.id]===item.correctAns)
    this.correctAnswer=correct.length;
    console.log("this.correctAnswer", this.correctAnswer)
}


handleReset(event){

this.selected={}
this.correctAnswer=0
}

}