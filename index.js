

function sauveguarder(){
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let age = document.getElementById("age").value;
    let type = document.formulaire.type.value;
    
    if(name == ""){
        alert("Please enter your name");
    }
    if(email == ""){
        alert("please enter your email");
    }
    if(age == ""){
        alert("please enter your age");
    }
    if(type == ""){
        alert("please enter the type");
    } 
    
    if(name && email && age && type){
        alert("your information is saved")
    }
    
}