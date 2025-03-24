function getValidNumber() {
    let userInput;
    let number;
    
    while (true) {
        userInput = prompt("Enter a number:");
        
        if (userInput === null) {
            alert("Operation cancelled.");
            return null; // Exit if the user cancels
        }
        
        number = Number(userInput);
        
        if (!isNaN(number)) {
            alert("Valid number entered: " + number);
            return number;
        } else {
            alert("Invalid input. Please enter a valid number.");
        }
    }
}

getValidNumber();
