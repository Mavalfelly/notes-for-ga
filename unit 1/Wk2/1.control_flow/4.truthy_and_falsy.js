/*
*****************
Truthy and Falsy
*****************
JavaScript has the primitive boolean values of true and false, but it also has the idea of truthy and falsy.
So what are truthy and falsy, and why don’t we use true and false for everything?
Understanding Truthy and Falsy
Truthy and falsy are conceptual and attempt to treat non-boolean expressions as booleans (true or false) during runtime.
This concept is especially useful in conditions like if statements,
where you might want to check if a variable exists or has a meaningful value without explicitly comparing it to true or false.
David's advice:
The best way is to remember the few falsey items because everything else is truthy
They are:
null: Represents the intentional absence of any object value.
undefined: Indicates that a variable has not been assigned a value.
false: The boolean value of false.
0 (zero): The number zero.
NaN (Not a Number): Indicates a value that is not a valid number.
'' (An empty string): Strings are falsy when they are empty. Note, a string with a value of a space (' ') is not empty and therefore is truthy.
***************
if(true){
    console.log('i get beer')
} else {
    console.log('whatever"')
}
***************
if('test'){
    console.log('i get beer')
} else {
    console.log('whatever"')
}
***************
if(0){
    console.log('i get beer')
} else {
    console.log('whatever')
}
***************
if(''){
    console.log('i get beer')
} else {
    console.log('whatever')
}
***************
if(false){
    console.log('i get beer')
} else {
    console.log('whatever')
}
***************
if('test'){
    console.log('i get beer')
} else {
    console.log('whatever')
}


*/