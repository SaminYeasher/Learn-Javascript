var num = prompt("Enter your number:");
var text;
num = parseInt(num);
if(num <=100 && num >=90){
    text = ("Your grade is A+");
}
else if(num <90 && num >=80){
    text = ("Your grade is A");
}
else if(num <80 && num >=70){
    text = ("Your grade is A-");
}
else if(num <70 && num >=60){
    text = ("Your grade is B");
}
else if(num <60 && num >=50){
    text = ("Your grade is B-");
}
else if(num <50 && num >=40){
    text = ("Your grade is C");
}
else if(num <40 && num >=33){
    text = ("Your grade is D");
}
else if(num <33 && num >=00){
    text = ("Your grade is F");
}
else{
    text = ("Your number is  invalid");
}
console.log(text)