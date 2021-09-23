let password = prompt("Enter Password")
if(password.length >= 6){
    if(password.indexOf(" ") === -1){
        console.log("Valid Password")
    }else{
        console.log("cannot contain space")
    }
}else{
    console.log("password is short")
}