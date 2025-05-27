setTimeout(function() {
    console.log("hi there");
    
    setTimeout(function(){
        console.log("inside the second one");

        setTimeout(function(){
            console.log("inside the third one");
            
        },3000);
        
    },2000);
},1000);