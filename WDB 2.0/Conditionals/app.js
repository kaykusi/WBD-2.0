/*console.log("Before Operation")
let random = Math.random();
if(random < 0.5){
    console.log("Your number is less than 0.5")
    console.log(random)
}
console.log("After Operation")*/

const day = parseInt(prompt("Enter Number of Day")) ;

switch (day) {
    case 1:
        console.log("Monday")
        break;
    case 2:
        console.log("Tuesday")
        break;
    case 3:
        console.log("Wednesday")
        break;
    case 4:
        console.log("Thursday")
        break;
    case 5:
        console.log("Friday")
        break;

    default:
        break;
}