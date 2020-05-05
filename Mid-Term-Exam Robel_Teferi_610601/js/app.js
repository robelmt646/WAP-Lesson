 /**
 * app.js
 * 
 * @author R. Teferi
 * @copyright R. Teferi
 * 
 */
$(function() {
    "use strict";
    $("#patient_registration_form").submit(
        function(evt) {
            evt.preventDefault();
            const patientID = $("#patient_id").val();
            const firstName = $("#first_name").val();
            const middleInitials = $("#middle_initials").val();
            const lastName = $("#last_name").val();
            const dateOfBirth = $("#date_of_birth").val();
            const department = $("#department").val();           
            const outPatient = $("input[name='outPatient']:checked").val();
            let newInput = `<tr><td>${patientID}</td><td>${firstName}</td><td>${middleInitials}</td><td>${lastName}</td><td>${dateOfBirth}</td><td>${department}</td><td class='.isOutpatient'>${outPatient}</td></tr>`;
            $("#data_display").append(newInput);
            $("#reset_button").click();
        }
    );
    $("#outpatient_checkbox").click(
        function(evt) {
            if($(this).prop("checked") == true){
                $("tbody").find("tr").each(
                    function() {
                        let isOutpatient = $(this).find(".isOutpatient").html() === "Yes";
                        if(!isOutpatient) {
                            $(this).hide();
                        }
                    }
                );
            }
            else if($(this).prop("checked") == false){
                $("tbody").find("tr").each(
                    function() {
                        let isOutpatient = $(this).find(".isOutpatient").html() === "Yes";
                        if(!isOutpatient) {
                            $(this).show();
                        }
                    }
                );
            }
        }
    );
    
}
);


const Account ={
    accountNumber:"null",
    balance:0.0,
    accountType:"null",
    toString: function(){
     return `AccountNumber: ${this.accountNumber}, balance: ${this.balance}, AccountType: ${this.accountType};`}
   
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