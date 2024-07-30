/*
**************
Parameters and Arguments
**************
*****************
Defining parameters and arguments
*****************
In the examples so far, seeing why functions are so helpful may be difficult.
It’s nice not to have console.logs over and over, but if a function always produces the same result, the usefulness is limited, right?
Functions are designed to take data input.
You might have been wondering why we had an empty set of parentheses in the basic syntax example from earlier:
Parameters are the named variables listed in a function’s definition that serve as placeholders for the values
that will be passed to the function when it is called.
Arguments are the values supplied to a function when called, which are then assigned to the corresponding parameters within the function.

// parameter is a placeholder for function
function sayHello(placeHolder) {
    console.log('Hello ' + placeHolder)
    console.log(`Hello ${placeHolder}`)
}


//the argument is when the function is RAN and the value that is passed

// the argment here is david
sayHello('david')

// the argment here is steve
sayHello('steve')

// the argment here is jobs
sayHello('jobs')


*/