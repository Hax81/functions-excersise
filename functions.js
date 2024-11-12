
// //1. Create a function called greet that logs the string "Hello, World!" to the console.
// function greet() {
  
//     console.log("Hello, world!");

//   }

// greet();

// 2. Write a function named favoriteNumber that logs your favorite number (e.g., 42) to the console

// function favoriteNumber() {

// console.log("My favorite number is 3");

// }
// favoriteNumber();

// 3. Create a function called magicEightBall that logs
// a random response from the following list: "Yes", "No", "Maybe", or "Ask again later".

// function magicEightBall() {

// const answers=["Yes", "No", "Maybe", "Ask again later"];
// const randomAnswers=Math.floor(Math.random()*answers.length);
// console.log(answers[randomAnswers]);

// }

// magicEightBall();

//4. Current Year
//Write a function called getCurrentYear that logs the current year to the console using the Date object.

// function getCurrentYear() {

// const d=new Date();
// console.log(d);
// }

// getCurrentYear();

//5. Random Joke
//Create a function called tellJoke that logs a random joke from a predefined list of jokes to the console.

// function tellJoke() {

// const jokes=["haha", "hoho", "hihi", "höhö", "hehe"];
// const randomJokes=Math.floor(Math.random()*jokes.length);

// console.log(jokes[randomJokes]);
// }

// tellJoke();

//6. Write a function named personalGreeting that takes a name
//as a parameter and logs a greeting string (e.g., "Hello, [name]!") to the console.

// function personalGreeting (name) {

// console.log("Hello" +"," +" " + name +"!")

// }

// personalGreeting("Henrik");

//7. Sum of Two Numbers
//Create a function called add that takes two numbers as parameters and logs their sum to the console.

// function add(x,y) {

//   let sum=(x+y);
//   console.log("Summan är" + " " + sum);

// }

// add(1,1);

//8. Age in Months
//Write a function named ageInMonths that 
//takes a person's age in years as a parameter and logs their age in months (e.g., age * 12).

// function ageInMonths(years) {


// let age=years*12;

// console.log(" You are" +" "+ age +" "+ "months old");

  
// }

// ageInMonths();


//9. Create a function called celsiusToFahrenheit that takes a temperature 
//in Celsius as a parameter and logs the equivalent temperature in Fahrenheit to the console

// function celciusToFahrenheit(celcius) {


// let fahrenheit=celcius*33.8;

// console.log(`${celcius} degrees celcius is equivalent to ${fahrenheit} degrees fahrenheit`);

// return(fahrenheit);

// }

//10. Write a function named getFullName that takes two parameters, 
//firstName and lastName, and logs the full name as a single string (e.g., "John Doe") to the console. 

// function getFullName(firstName,lastName) {

// let name=firstName+ " " +lastName;

// console.log(`The full name is ${name}`);

// return(name);

// }


//11. Create a function called calculateArea that takes the length and width of a rectangle as parameters 
//and logs the area to the console.

// function calculateArea(length,width) {

//   let area=length*width;

//   console.log(`The area of the rectangle is ${area} squared`);

//   return(area);

// }

// 12. Write a function named findMax that takes two numbers as parameters and logs the larger of the two.

// function findMax(x,y) {


// if(x>y) {

// console.log(`${x} is the biggest number`);

// return(x);
// }

// if(y>x) {

// console.log(`${y} is the biggest number`);
// return(y);

// }

// else {

//   console.log("Invalid input");
//   return(0);

// }


// }

// //13.

// function countVowels(str) {

//   let count=0;
//   const vowels=["a","e","i","o", "u"];

//   for(const letter of str.toLowerCase()){

//     if(vowels.includes(letter)) {
//       count++;

//     }

//   }
//   return count;
   

// }

// console.log("Vowels"=count);

//14. Discount Price
//Write a function named calculateDiscount that takes the original price and the 
//discount percentage as parameters and logs the price after discount to the console.

// function calculateDiscount(orgPrice,discPerc) {


// let discount=orgPrice*discPerc;
// let price=orgPrice-discount;

// console.log(`The price after discount is ${price}`);

// return(price);

// }

// 15. Reverse String

// Create a function called reverseString that takes a string 
// as a parameter and logs the string reversed to the console

// function reverseString(str) {

// let strrev=str.split("").reverse().join("");

// console.log(strrev);
// return (strrev);


// }

//Level intermediate 
//1. Write a function called isPalindrome that takes a string as a parameter and returns true if 
//the string is a palindrome (reads the same forwards and backwards) and false otherwise.

// function isPalindrome(str) {

// let strPalin=str.split("").reverse().join("");

// if(strPalin===str) {
//   console.log("true");
//   return true;
// }

// if(strPalin!==str) {             //För bättre läsbarhet bör detta egentligen vara en else{}.
//     console.log("false");
//     return false;

// }

// }

/*2. Create a function named fizzBuzz that takes a number as a parameter and returns:
"Fizz" if the number is divisible by 3,
"Buzz" if it is divisible by 5,
"FizzBuzz" if it is divisible by both, and
the number itself if none of these conditions are met.*/

// function fizzBuzz(x) {


//   if(x%5===0 && x%3===0) {
//     console.log("FizzBuzz");
//     return "FizzBuzz";
  
//   }
  
  
//   if(x%3===0) {
//     console.log("Fizz");
//     return "Fizz";

//   }

//   if(x%5===0) {
//     console.log("Buzz");
//     return "Buzz";

//   }

//   else {
//     console.log(x);
//     return x;


//   }


// }



//3. Write a function called factorial that takes a positive integer as a 
//parameter and returns the factorial of that number (e.g., 5! = 5 × 4 × 3 × 2 × 1).

// function factorial(x) {

//  if (x < 0) {

// console.log("The number must be a positive integer");

//  } 

//  let result=1;
 
//  for (let i=1; i<=x; i++) {

//   result*=i;



//  }
//  return result;

// }

//4. Longest Word
//Create a function named findLongestWord that takes a string (a sentence) as a parameter 
//and returns the longest word in that sentence.

// function findLongestWord(str) {

// let strSplit=str.split(' ');
// let longestWord="";

// for (let i=0; i<strSplit.length; i++) {

//     if(strSplit[i].length>longestWord.length){
      
//       longestWord=strSplit[i];


//       }


//     }

// console.log(`The longest word is ${longestWord}`);
// return longestWord;

// }

//5. Array Average
//Write a function called calculateAverage that takes an array of numbers as a parameter and returns 
//the average of those numbers.

// function calculateAverage(array) {

  
//   let sum=0;

//     for(let i=0;i<array.length;i++) {

//       sum+=array[i];

//     }

//     let mean=sum/array.length;
//     return mean;


// }


//6.Remove Duplicates
//Create a function named removeDuplicates that takes an array as a parameter and returns a new array 
//with duplicate values removed.

// function removeDuplicates(array) {

// let newArr=[];

// for (let i=0;i<array.length;i++) {

//   if(newArr.indexOf(array[i]) === -1) { //"Om aktuellt index av array INTE redan finns i newArr så..."

//     newArr.push(array[i]);          //"...pusha in det arrayindex i newArr"

//   }



// }

// return newArr;

// }


//7. 