console.log("Select an option: \na. Option 1 \nb. Option 2\nc. Option 3 ");


choice = prompt();

var text;

if (choice == "a") {

    text = "You have selected option 1";

}
else if (choice == "b") {
    text = "You have selected option 2";

} else if (choice == "c") {

    text = "You have selected option 3";

} else {
    text = "No option is selected!";

}

console.log(text);