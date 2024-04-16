#! /usr/bin/env node
import inquirer from "inquirer";
let currency = {
    USD: 1,
    PKR: 279.22,
    INR: 83.53,
    EUR: 1.06,
    GBP: 0.8,
};
let answer = await inquirer.prompt([
    {
        name: "from",
        message: "Enter From Currency",
        type: "list",
        choices: ["USD", "PKR", "INR", "EUR", "GBP"],
    },
    {
        name: "to",
        message: "Enter To Currency",
        type: "list",
        choices: ["USD", "PKR", "INR", "EUR", "GBP"],
    },
    {
        name: "amount",
        message: "Enter Your Amount",
        type: "number",
    },
]);
let fromAmount = currency[answer.from];
let toAmount = currency[answer.to];
let amount = answer.amount;
let baseAmount = amount / fromAmount;
let covertedAmount = baseAmount * toAmount;
console.log(covertedAmount);
