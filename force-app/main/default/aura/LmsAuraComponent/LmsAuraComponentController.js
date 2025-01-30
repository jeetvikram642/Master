({
    handleMessage:function(component,message){


    },
    inputHandler:function(component,event){

        component.set("v.messageValue",event.target.value)
    }
})