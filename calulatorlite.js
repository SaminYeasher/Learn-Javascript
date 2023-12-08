console.log("Select an option: \n1. Add \n2. Substract \n3. Multiply \n4. Divide");

var num1 = prompt("Enter First Number:");
var num2 = prompt("Enter Second Number:");
var choice = prompt("Choose an operation:");

num1 = parseInt(num1);
num2 = parseInt(num2);
choice = parseInt(choice);

var result = null;

var num1con = isNaN(num1);
var num2con = isNaN(num2);
var choice1con = isNaN(choice);
if (num1con || num2con || choice1con) {
    console.log("Invalid Input!");
}
else {
    switch (choice) {
        case 1:
            result = num1 + num2;
            break;
        case 2:
            result = num1 - num2;
            break;
        case 3:
            result = num1 * num2;
            break;
        case 4:
            result = num1 / num2;
            break;
        default:
            break;
    }
    if (result == null){
        console.log("No Result!");
    }
    else{
        console.log("Result " + result);
    }
}