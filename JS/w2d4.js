"use strict";

// ----------------------------------------------------//------------------------------------------------------------------------
const person = {
    name:"",
    dateOfBirth:"",
    getName: function(){
            return this.name;
    },
    setName: function(name){ this.name = name; }
}

const john = Object.create(person);
john.setName("john");
john.getName();
john.dateOfBirth = "1998-12-10";
console.log("The person's name is " + john.getName());
console.log("John was born on " +john.dateOfBirth);

//-----------------------------------------------------------------//-----------------------------------------------------------

const employee = Object.create(person);
employee.salary = 0;
employee.hireDate = new Date();
employee.doJob = function(jobTitle){
    return `${this.name} is a ${jobTitle} who earns ${this.salary}`; 
}
//const anna = Object.create(person);
employee.setName("Anna");
employee.salary = "$249,995.50";
console.log(employee.doJob("Programmer"));

//-----------------------------------------------------------//--------------------------------------------------------------------
function Person1(name, dateOfBirth){
    this.name = name;
    this.dateOfBirth = dateOfBirth;
}

Person1.prototype.getName = function(){
        return this.name;
}
Person1.prototype.setName = function(newName){
        this.name = name;
}
Person1.prototype.toString = function(){
            return `{Name: ${this.name}, DateOfBirth: ${this.dateOfBirth}}`;
}

const peter = new Person1("Peter","1985-11-10");
console.log(peter.toString());


//------------------------------------------------------------//-------------------------------------------------------------------------


// 4.	Refer to your work on Lab Assignment 4. Add Javascript and JQuery code to work with your 2 HTML forms as follows:

// a.	Login Form: Add code such that when the Form is submitted by clicking on the Submit button, the values entered in the 
//input fields are printed to the Console. Do this using mostly JQuery API. Note: Prevent the form submission operation from doing a post-back/page reload.
// b.	New Product Form: Add code such that when the form is submitted by a click on the Submit button, the values entered in the input fields are displayed
// in a <div> block that appears below of the form. Note: Prevent the form submission operation from doing a post-back/page reload.
// Please submit your code as a single zip file attachment to Sakai or push it to your github repository.

