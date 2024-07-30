/*
*****************
What is a function?
*****************
A function is a reusable block of code written to perform a single purpose.
With a function, you can store code that can be used conveniently as many times as you wish without having to rewrite the code each time.
As a result, functions are one of the fundamental building blocks of JavaScript, and you’ll find and use them everywhere.
there in an input and an output

*****************
Why are functions essential in programming?
*****************
Tackle complexity
We typically tackle a complex task by breaking it into smaller tasks or steps - when we’re programming, we want to do the same!
Functions allow us to break up programs into more manageable blocks of code.
Code reuse
Functions provide code reuse because they can be called repeatedly.
For example, a renderBoard function might be called every time the data in a board variable is changed.
This allows us to keep our code DRY.
Documentation & debugging
Naming functions appropriately, for example a name like renderBoard helps document what that function’s job is (to show the user the current game board).
Organizing code into functions also makes it easier to find and fix code that’s not working as expected, a process known as debugging.

//keyword function followed by a function's name sayMyName. 
// then there are parenthesis 
// followed by curly brackets
//inside the curly brackets is the thing we want to do. and in this case, it is to print david
function sayMyName(){
    console.log('david')
}

// to run the function, we just simply the function followed by parenthesis
sayMyName()
sayMyName()



function sayMyName(){
    console.log('Matt & David')
}
sayMyName()
*/