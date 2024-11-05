
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

function ageInMonths() {


  
}








//13.

function countVowels(str) {

  let count=0;
  const vowels=["a","e","i","o", "u"];

  for(const letter of str.toLowerCase()){

    if(vowels.includes(letter)) {
      count++;

    }

  }
  return count;
   

}

console.log("Vowels"=count);