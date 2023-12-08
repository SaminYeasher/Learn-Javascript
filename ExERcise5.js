console.log("Sum of the series of square numbers!");
var num1 = parseInt(prompt("Enter the number of terms : "));
var series="";

for(var i = 1, sum = 0;i <=num1 ;i++){
    sum +=i**2;
    series +=(i**2).toString();
    if (i == num1){
        continue;
    }
    series +=" + ";
}
console.log(`${series} = ${sum}`);

// to justify how it works 

