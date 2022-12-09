//This is my code
// var guess=+prompt("enter your number from 0-9")

// if(guess===9){
//     document.write("Congratulations! Your guess is right")
// }
// else if(guess===9-2){
//     document.write("You were so close")
// }

// else if(guess===9+2){
//     document.write("You were so far away")
// }
// else{
//     document.write("Try Again")
// }

// switch(guess){
//     case 9:
//         document.write("Congratulations! Your guess is right")
//         break
//     case 9+2:
//         document.write("You were so far away")
//         break
//     case 9-2:
//         document.write("You were so close")
//         break
//     default:
//         document.write("Try Again")
//         break

// }



var number1=prompt("Enter first number")
var number2=prompt("Enter second number")
var op=prompt("Enter an operator +,-,*,/")
var result=0
switch(op){
    case "+":
        result=parseFloat(number1)+parseFloat(number2)
        document.write("Addition Result is: "+result)
        break
    case "-":
        result=parseFloat(number1)-parseFloat(number2)
        document.write("Subtraction Result is: "+result)
        break
    case "*":
        result=parseFloat(number1)*parseFloat(number2)
        document.write("Multiplication Result is: "+result)
        break
    case "/":
        result=parseFloat(number1)/parseFloat(number2)
        document.write("Division Result is: "+result)
        break
    default:
        document.write("Invalid Input")
        

}