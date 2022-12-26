import inquirer from "inquirer";
// let input:{userid:string,
//     pin:number,
//     AccType:string,
//     Options:string,}
let input = await inquirer.prompt([
    {
        name: "userid",
        type: "string",
        message: "kindly enter your UserId:"
    },
    {
        name: "pin",
        type: "password",
        message: "kindly enter your Pin:",
        when(answers) {
            return answers.userid;
        }
    },
    {
        name: "AccType",
        type: "list",
        choices: ["Current Account", "Saving Account"],
        message: "Chose Account",
        when(answers) {
            return answers.pin;
        }
    },
    {
        name: "Options",
        type: "list",
        choices: ["Fast Cash", "Cash Withdraw"],
        message: "Chose GivenBelow",
        when(answers) {
            return answers.AccType;
        }
    },
    {
        name: "CashAmount",
        type: "list",
        choices: [1000, 3000, 5000, 10000],
        message: "Chose Amount:",
        when(answers) {
            return answers.Options === "Fast Cash";
        }
    },
    {
        name: "CashAmount",
        type: "number",
        message: "Enter Amount:",
        when(answers) {
            return answers.Options === "Cash Withdraw";
        }
    },
]);
const { userid, pin, AccType, Options, CashAmount } = input;
//console.log(input.userid,input.pin,input.Options,input.AccType);
const Balance = Math.ceil(Math.random() * 1000000);
if (userid && pin && CashAmount) {
    console.log(Balance);
    if (Balance > CashAmount) {
        let CurrentBalnace = Balance - CashAmount;
        console.log(`Transaction sucessful ${CurrentBalnace}`);
    }
    else {
        console.log("Insuficent Balance");
    }
}
