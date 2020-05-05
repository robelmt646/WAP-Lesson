"use strict";
const Account ={
 accountNumber:"null",
 balance:0.0,
 accountType:"null",
 toString: function(){
  return AccountNumber: ${this.accountNumber}, balance: ${this.balance}, AccountType: ${this.accountType};}

}

const savingsAccount = Object.create(Account);
savingsAccount.accountNumber = "10001";
savingsAccount.balance = 125000.00;
savingsAccount.accountType = "Savings";

const checkingAccount = Object.create(Account);
checkingAccount.accountNumber = "10002";
checkingAccount.balance = 75090.50;
checkingAccount.accountType = "Checking";

savingsAccount.addInterest = function(interestRate){
    return this.balance + (interestRate/100);  
}

checkingAccount.deductMaintenanceFee = function(maintenanceFeeRate){
    return this.balance - (maintenanceFeeRate/100);
}

console.log(savingsAccount.addInterest(1.5));

console.log(checkingAccount.deductMaintenanceFee(10));

console.log(savingsAccount.toString());

console.log(checkingAccount.toString());