/* eslint-disable no-unused-vars */

/////////////////////////////////////
/* Problem 1

Write a function called sum() that takes in two numbers as arguments and 
then returns an array where the first element is the sum of those numbers, 
and the second element is a concatenated string that EXACTLY follows this 
example and uses the values that were input into the function:

"The sum of 4 and 7 is 11."
*/

//1

export function sum(a, b) {
    let returnNumber = a + b;
        
    const returnString = 'The sum of ' + a + ' and ' + b + ' is ' + returnNumber + '.';
    return [returnNumber, returnString];
    
}






// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. 
// Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 2
Write a function called multiply() that takes in two numbers as arguments and returns an array where the first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:

"The product of 5 and 9 is 45."
*/

export function multiply(a, b) {
    let returnNumber = a * b;
    const returnString = 'The product of ' + a + ' and ' + b + ' is ' + returnNumber + '.';
    return [returnNumber, returnString];
                
            
}


// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. 
// Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 3
Write a function called sumAndMultiplyThreeNumbers() that takes in three 
numbers as separate arguments and returns 
an array where the first element is the sum of those three numbers, 
the second element is the product of those three numbers,  
and the third and fourth elements are strings that EXACTLY follow this example and 
use the values that were input into the function:

Third element: "4 and 7 and 5 sum to 16."
Fourth element: "The product of 4 and 7 and 5 is 140."

IMPORTANT DETAIL: You may not use the arithmetic operators + and * in this function. 
To do addition, use your sum() function, and to do multiplication, use your multiply() 
function that you've already created. You're going to have to be resourceful to figure out 
how to do this. However, you may continue to use the + operator for string concatenation.
*/
//3
export function sumAndMultiplyThreeNumbers(a, b, c) { //eslint-disable-line
    let sum1 = sum(a, b);
    let sum1value = sum1[0];
    let sum2 = sum(sum1value, c);
    let sum2value = sum2[0];

    let product1 = multiply(a, b);
    let product1value = product1[0];
    let product2 = multiply(product1value, c);
    let product2value = product2[0];
    
    let returnAddString = a + ' and ' + b + ' and ' + c + ' sum to ' + sum2value + '.';
    let returnProductString = 'The product of ' + a + ' and ' + b + ' and ' + c + ' is ' + product2value + '.';  
    return [sum2value, product2value, returnAddString, returnProductString];
}

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. 
// Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 4
Write a function called sumArrayWithThreeNumbers() that takes in an array of numbers 
as its single argument and then returns an array where the first element is the sum 
of the numbers in the array, and the second element is a string that EXACTLY follows 
this example and uses the values that were input into the function:

"2,3,4 was passed in as an array of numbers, and 9 is their sum."

IMPORTANT DETAIL: You may not use the arithmetic operator + in this function. 
To do addition, use your sum() function that you've already created. You're going to 
have to be resourceful to figure out how to do this. However, you may continue 
to use the + operator for string concatenation.
*/
//4
export function sumArrayWithThreeNumbers(sumArr) {
    let sum1 = sum(sumArr[0], sumArr[1]);
    let sum1value = sum1[0];
    let sum2 = sum(sum1value, sumArr[2]);
    let sum2value = sum2[0];
    let returnString = sumArr[0] + ',' + sumArr[1] + ',' + sumArr[2] + ' was passed in as an array of numbers, and ' + sum2value + ' is their sum.';
    return [sum2value, returnString];
}

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. 
// Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 5
Write a function called multiplyArrayWithThreeNumbers() that takes an array of numbers 
as its argument and returns an array whose first element is the product of those numbers, 
and the second element is a string that EXACTLY follows this example and uses the values 
that were input into the function:

"The numbers 2,3,4 have a product of 24."

IMPORTANT DETAIL: You may not use the arithmetic operator * in this function. 
To do multiplication, use your multiply() function that you've already created. 
You're going to have to be resourceful to figure out how to do this. 
This function should handle an array containing three elements. However, 
you may continue to use the + operator for string concatenation.
*/
//5
export function multiplyArrayWithThreeNumbers(multArr) { //eslint-disable-line
    let product1 = multiply(multArr[0], multArr[1]);
    let product1value = product1[0];
    let product2 = multiply(product1value, multArr[2]);
    let product2value = product2[0];
    let returnString = 'The numbers ' + multArr[0] + ',' + multArr[1] + ',' + multArr[2] + ' have a product of ' + product2value + '.';   
    return [product2value, returnString];

}

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. 

// You're done! Submit the link to the repo following the instructions in Canvas. Or, try out the stretch goal below...

// Don't forget to create a new branch for your work on the next question, if you attempt it.

/////////////////////////////////////
/* STRETCH GOAL: Problem 6
Write a function called multiplyAnyArray() that takes an array of numbers of any length as its argument and returns an array whose first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and concatenates a message using the arguments that were passed into the function:

"The numbers 1,2,3,4,5 have a product of 120."

IMPORTANT DETAIL: You may not use the arithmetic operator * in this function. To do multiplication, use your multiply() function that you've already created. You're going to have to be resourceful to figure out how to do this. However, you may continue to use the + operator for string concatenation.

This function should be dynamic, accepting an array of any length.
*/

//6
export function multiplyAnyArray(dynamicArray) { //eslint-disable-line
    let prodNumber = 0;   
    let numberString = '';
    for(let i = 0; i < dynamicArray.length; i++) {
        if(i === 0){
            prodNumber = dynamicArray[i];
            numberString = dynamicArray[i];
        } 
        else {
            let returnNumber = multiply(prodNumber, dynamicArray[i]);
            prodNumber = returnNumber[0]; 
            numberString = numberString + ',' + dynamicArray[i];
        }
    } 
    let returnString = 'The numbers ' + numberString + ' have a product of ' + prodNumber + '.';
    return [prodNumber, returnString];
}


// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. 
// You're done! Submit the link to the repo following the instructions in Canvas.
