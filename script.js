"use strict";

/*
1. Write a program that prompts the user to enter five numbers and stores
them in an array. Then, output the sum of the numbers to the console
*/

/*
let numbers = [];

for(let i = 0; i < 5; i = i + 1){
  let number = parseInt(prompt(`Enter number ${i + 1}:`));
  numbers.push(number);
}
let sum = 0;
for (let i = 0; i < numbers.length; i++){
  sum = sum + numbers[i];
}
console.log("Sum of all the numbers: ", sum);
*/

/*
2. Write a function called findMax that takes in an array of numbers as a parameter and returns the largest number in the array.
*/

function findMax(numbers){
let maxNumber = numbers[0];

for(let i = 0; i < numbers.length; i++){
  if (numbers[i] > maxNumber){
    maxNumber = numbers[i];
  }
}

return maxNumber;
}

let numbers = [10, 5, 8, 3, 12];
let largestNumber = findMax(numbers);
console.log("The largest number is:", largestNumber);


// let largestNumber = findMax([10, 5, 8, 3, 12]);
// console.log("The largest number is:", largestNumber);





let number = 5;

let sum = 1;

for (let i = 1; i <= number; i = i + 1){
  sum = sum * (i)
  // sum = 1 * 0 = 0
  // sum = 0 
}

//result = 5, 4, 3, 2, 1 (multiply them all)
//result = 120
console.log(sum);

/*
3. Write a program that prompts the user to enter a sentence and stores
each word in an array. Then, output the length of the array to the
console.
*/


// let sentence = prompt("Enter a sentence: ")
// let wordArray = [];
// let words = sentence.split(" ");

// for(let i = 0; i < words.length; i++){
//   wordArray.push(words[i]);
// }
// console.log(wordArray);


/*
4. Write a program to take an array and print average of all the elements of
array.
*/
/*
let arrayExample = [1,2,3,4,5];

let addAllnumber = 0;

for(let k = 0; k < arrayExample.length; k++){
addAllnumber = addAllnumber + arrayExample[k];

}

console.log(addAllnumber / arrayExample.length);
*/
// create an array with 5 numbers 
// create a for loop to get each number in the array 
// then add each number in the array 
//  

/*
Write a program to output only those elements who are multiple of
three(3) or five(5).
*/

let multiple = [49, 25, 9, 50, 88, 100];
let output = [];

for(let i = 0; i < multiple.length; i = i + 1){
if(multiple[i] % 5 === 0 || multiple[i] % 3 === 0){
output.push(multiple[i]);
}
}
console.log(output);