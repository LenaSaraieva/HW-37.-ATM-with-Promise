/*You need to implement an ATM algorithm for:

Checking the card balance.
Withdrawing cash.*/
function getMoney(userData, bankData) {
    return new Promise((resolve, reject) => {
       if (confirm("View card balance?")) {
        const currency = prompt("Enter currency for balance:");

        if (currency in userData) {
            console.log("Balance is: ${userData[currency]} ${currency}");
            resolve(userData);

        } else {
            console.log("Invalid currency. Please enter a valid currency.");
        }

       } else {
        const withdrawCurrency = prompt("Enter currency for withdrawal:");
        const withdrawAmount = parseFloat(prompt("Enter withdrawal amount:"));

        
        if (withdrawCurrency in userData && withdrawCurrency in bankData) {
            if (withdrawAmount > bankData[withdrawCurrency].max) {
                console.log(`The entered amount is greater than the allowed maximum. Maximum withdrawal amount: ${bankData[withdrawCurrency].max} ${withdrawCurrency}`);

            } else if (withdrawAmount <  bankData[withdrawCurrency].min) {
                console.log(`The entered amount is less than the allowed minimum. Minimum withdrawal amount: ${bankData[withdrawCurrency].min} ${withdrawCurrency}`);

            } else {
                console.log(`Take your cash ${withdrawAmount} ${withdrawCurrency} ${bankData[withdrawCurrency].img}`);
            }

        } else {
            console.log("Invalid currency. Please enter a valid currency");
        }

        reject ({ userData, bankData});
       } 

    })
    .finally(() => {
        console.log("Thank you, have a nice day 😊");
    });
}
getMoney(userData, bankData);