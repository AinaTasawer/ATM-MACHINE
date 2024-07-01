#!/usr/bin/env node

import inquirer from "inquirer";
import Choices from "inquirer/lib/objects/choices.js";

let myBalance = 250000;   
let myPin = 4321;

let pinAnswer = await inquirer.prompt(
    [
        {
            name: "pin",
            message: "Enter your pin:",
            type: "number"
        }
    ]
);

if(pinAnswer.pin === myPin){
    console.log("Your pin code is correct!");
}
    let operationAns = await inquirer.prompt(
        [
            {
                name:"operation",
                message:"please select option",
                type:"list",
                choices:["Withdraw", "Check balance", "fast cash"]
            }
        ]
    );

    console.log(operationAns);

    if(operationAns.operation === "Withdraw"){
        let amountAns = await inquirer.prompt(
            [
                {
                    name:"amount",
                    message:"enter your amount",
                    type:"number"
                }
            ]
        );
        
        if(amountAns.amount > myBalance){
            console.log("Insufficient balance! You cannot withdraw more than 250000")
        }else
        {
        myBalance -= amountAns.amount;
        console.log(`your remaining balance is: ${myBalance}`);
        }
    }else if(operationAns.operation === "Check balance"){
        console.log(`Your balance is ${myBalance}`);

    }else if(operationAns.operation === "fast cash"){
        let fastCashAns = await inquirer.prompt(
            [
                {
                    name: "amount",
                    message: "select your fast cash amount",
                    type: "list",
                    choices: [1000, 2000, 5000, 10000, 15000, 20000, 100000, 200000, 250000]
                }
            ]
        );
        
        if(fastCashAns.amount > myBalance){
            console.log("Insufficient balane! You cannot withdraw more than 250000");
        }else{
            myBalance -= fastCashAns.amount;
            console.log(`Your remaining balance is: ${myBalance}`);
        }
}
else{
    console.log("Incorrect pin code!");
};
