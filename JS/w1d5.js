/*   Assingment w1d5
*/
"use-strict"



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
