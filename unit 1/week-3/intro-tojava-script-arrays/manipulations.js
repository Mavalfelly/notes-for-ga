/* 
**updating existing elements in an array**
we can use the push ethod to add to the end of an array
the push method can only be uses on objects that allow it

*/

const movies = ['Barbie', 'interstellar','get out']

movies.push('mean girls')// added mean girls to the end of the list

console.log(movies)

movies.push('titanic')

console.log(movies)
// at this point code will return
//[ 'Barbie', 'interstellar', 'get out', 'mean girls', 'titanic' ]

// pop will remove last in array

movies.pop()
 console.log(movies)
 movies.pop()
 console.log(movies)

// to add you use splice and then ident wher you want to insert in 0-1

movies.splice(1, 0, 'mean girls')
//first argument is 1. this means i want to insert at index 1
//second arrgument is 0. this mean i want to delete 0 elements to the right
//third argument is ' mean girls' this is what i will be inserting
console.log(movies)
/*
The slice() method returns selected elements in an array, as a new array.

The slice() method selects from a given start, up to a (not inclusive) given end.

The slice() method does not change the original array.
*/

/*
To complete Exercise 9, we need to use the join() method to concatenate the strings in the foods array, separated by ' -> '. Then, we assign the result to a variable called allFoods and log it to the console.

Here is the complete solution:


const foods =  [ 'taco', 'sushi', 'cupcakes', 'tofu', 'cheeseburger' ];
const allFoods = foods.join(' -> ');

console.log('Exercise 9 result:', allFoods);
This code will output the concatenated string with ' -> ' separating each element of the foods array. Let's break down the steps:

Define the foods array.
Use the join(' -> ') method on the foods array to concatenate the strings, separated by ' -> '.
Assign the result of the join() method to the variable allFoods.
Log the result to the console.
Running this code will produce the desired output: