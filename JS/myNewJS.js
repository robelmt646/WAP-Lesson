// //comments
// /*
// what 
// is 
// */
"use-strict"

// let array = ["me", "you"];
// console.log(array);
// array.push("rob");
// array.unshift("lem");
// console.log(array);

// const a = [1,3,5,3,3]; 
// const b = a.map(function(elem, i, array) {
//   return elem + 3;
// })
// console.log(b);
// const c = a.filter(function(elem, i, array){
//   return elem !== 3;});
// console.log(c);
// const d = a.reduce(function(prevValue, elem, i, array){
//   return prevValue + elem;
// });
// console.log(d);

// const d2 = a.find(function(elem) {return elem > 1;}); //3
// const d3 = a.findIndex(function(elem) {return elem > 1;}); //1
// console.log(d2);
// console.log(d3);

// let array1 = [];
// let arr = [2, 56, 78, 36, 65];
// let new_arr = arr.map(function(num, i , arr) {
//    if(num%3===0){array1.push(arr[i])};
// });
// console.log(array1);

// let an_arr = arr.filter(function(num,i,arr){
// return num!==3 ; } );
// console.log(an_arr);

// function multiply(num1,num2) {
//     let result = num1 * num2;
//     return result;
//   }

// console.log(multiply(4, 7)+ multiply(20, 20) + multiply(0.5, 3));
// const factorial = function fac(n) 
// 		{ return n < 2 ? 1 : n * fac(n - 1)  }; 
    
//     console.log('factorial result is: ' + factorial(5)); 
//     function f1(){}; console.log(f1.name); // 'f1'
// var f2 = function(){}; console.log(f2.name); //'f2 in ES6‘
// var f3 = function f3(){}; console.log(f3.name); //’f3’

// function g() {
//     return {
//            g: 1 
//       } ;
//   } 
//   function u() 
//   {  //OTBS – ok, but not good practice according to some (Crockford, …)
//    return  //semicolon gets inserted here
//        { 
//     u: 1 
//   } ;
//   } 
//   console.log(g()); //object
//   console.log(u());  //undefined
  
// function changeText() {
//     let textbox = document.getElementById("output");
//     textbox.value = "/image/Noah_happy.jpg"; 
//    }

//    function swapText(){
//    var span = document.getElementById("output2");
//    var textBox = document.getElementById("textbox2");
//    var temp = span.innerHTML;
//    span.innerHTML = textBox.value;
//    textBox.value= temp;

// }


// window.onload = function(){
//     document.getElementById("clickme").onclick = changeColor;
// };

// function changeColor(){
//     const clickMe = document.getElementById("clickme");
//     for (let index = 0; index < clickMe.length; index++) {
//         clickMe[index].onclick.style.color = "red";
//     //     clickMe.style.color = "red";
   
//     // clickMe.style.width = "100px";
//     // clickMe.style.height="50px";
//     // clickMe.style.backgroundColor=  "blue";
        
//     }
//         //  clickMe.style.color = "red";
    

// }

// find largest numbers between two
const largestOfTwo = function max(a,b){

   if(a>b){
       return a;
   }
   else{
       return b;
   }
}
console.log(largestOfTwo(52,3));
//----------------------------------------------------------------------------------------------------------------------
// find largest number from three
const largestOfThree = function maxOfThree(a,b,c){
    if(a>=b){
        if(a>=c)
            return a;
        else 
            return c;
    }
    else{
        if(b>=c)
            return b;
        else
            return c;
        
    }
}

console.log(largestOfThree(2,2,4));

let arrX = [4,5,5,6,2]

let sumOfNumbers= function sum(arr){
    let sum= 0;
    for (let i = 0; i < arr.length; i++) {
        sum+=arr[i];
        
    }
    return sum;
}

let Multiplication= function mult(arr){
    let sum= 0;
    for (let i = 0; i < arr.length; i++) {
        sum*=arr[i];
        
    }
    return sum;
}

console.log(Multiplication("Sum of Numbers : "+ arrX));
console.log("Sum of Numbers : "+ sumOfNumbers(arrX));

//check if character is vowel
//-----------------------------------------------------------------------------------------------------------------------
// let checkChar = function isVowel(x) {

//     var result;
  
//     result = x == "A" || x =='a' || x == 'e'|| x == "E" || x == "I" || x == 'i'|| x == "O" || x == 'o'|| x == "U"|| x=='u';
//     return result;
//   }
  
// //   var input;
  
// //   do {
// //     input = prompt("Enter a character ");
// //     if (input.length == 1) {
// //       alert(isVowel(input));
// //     }
// //   } while (input.length != 1);

//   console.log(checkChar(a));

  // ex 5

  //-------------------------------------------------------------------------------------
  let reversString = function reverse(x){
    let splitString = x.split("");
    let reversedStringArray = splitString.reverse();
    let joinReversedStrArray = reversedStringArray.join("");
    return joinReversedStrArray; 
}

 console.log( reversString("Robel"));

 let reverseAstring= function revStr(string){
    let newStr = "";
    for (let i = string.length-1; i >=0 ; i--) {
        newStr += string[i];
        
    }
    return newStr;
 }

 console.log(reverseAstring("Selamawit"));
//--------------------------------------------------------------------------------------------------------
 let findLongestWord = function longsestWord(array){
     let longest = array[0].length;
     for (let i = 0; i < array.length; i++) {
         if(array[i].length>longest){
             longest = array[i];
         }
         
     }
     return longest;
 }

 let x =["hello","bye","Robel" , "Henokaaa"];

 console.log(findLongestWord(x));

//------------------------------------------------------------------------------------------------------

let computeSumOfSquares = function square(array){
    let sum = 0;

    for (let i = 0; i < array.length; i++) {
        sum+= Math.pow(array[i],2);
        
    }
    return sum;
}

let num = [1,2,3,5,7];
console.log(computeSumOfSquares(num));

//------------------------------------------------------------------------------------------------------
let printOddNumber = function OddNum(array){
    let newArr = [];
    for (let i = 0; i < array.length; i++) {
        if(array[i]%2!==0){
            newArr.push(array[i]);
        }
        
    } return newArr;
}
let num1 = [11,22,33,45,77,64,68];
console.log(printOddNumber(num1));

//--------------------------------------------------------------------------------------------------------

let computeSumOfSquaresOfEvensOnly = function sumOfSquareOfEven(arr){
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        if(arr[i]%2==0)
        sum+= Math.pow(arr[i],2);
        
    }
    return sum;
}
let num3 = [1,2,3,4,5];
console.log(computeSumOfSquaresOfEvensOnly(num3));

//--------------------------------------------------------------------------------------------------------

let secondBiggestNum = function secondBiggest(arr){
    let firstBiggest = arr[0];
    let secondBiggest = arr[0];

    for (let i = 0; i < arr.length; i++) {
        if(arr[i]>firstBiggest){
            secondBiggest = firstBiggest;
            firstBiggest = arr[i];
        }  
    }return secondBiggest;

}
let num4 = [1,2,3,4,5,6,7,8];
console.log(secondBiggestNum(num4));

//-------------------------------------------------------------------------------------------------------------
let arrY = [1,2,3,4,5];
let total = function sumFunctionalPro(arrY){

const sumOfNum = arrY.reduce((sum, num) => sum+ num);
return sumOfNum;
}
console.log(total(arrY));

let totalMult = function multFunctionalPro(arrY){

    const sumOfNum = arrY.reduce((sum, num) => sum* num);
    return sumOfNum;
    }
console.log(totalMult(arrY));

//-------------------------------------------------------------------------------------------------------------

let printFibo = function fib(number, startNumber, secondStartNumber){
    let fib =[];

    fib[0] = startNumber;
    fib[1] = secondStartNumber;
    for(let i=startNumber+1; i<number;i++){

        fib[i] = fib[i-2] + fib[i-1];
    }
   return fib;
}

console.log("Fibinacci : " + printFibo(6, 1,2));

//--------------------------------------------------------------------------------------------------------------

document.getElementById("button").onclick = function(){
    setInterval(function() {
        let date = new Date();
        let dateString = date.toString();
        document.getElementById("clock").innerHTML = dateString;
       // document.getElementById("image").src ="image/giphy.gif"; }, 1000);    

    } ) 
  }
