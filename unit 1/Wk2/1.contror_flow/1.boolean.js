/*
Equality operators

in js there are two equalities

== is loose equality, only checks the values
=== is strict equality, checks value and type(string, number, boolean, etc)
tool to check whether two values are equal
reads
l === r 

3 == '3'( this comes out to true)
this is because only the value is checked

3 === '3'( this is false)
this is because the values and equal but the types are different


console.log ( 'steve' === "Steve")// 1 A
console.log ( "three" === 3)// 1 B
console.log ( 'steve' === "steve")// 2 A
console.log ( 1 === 1)// 2 B
console.log ( 2 === 3)// 2 C
console.log ( true === true)// 2 D
console.log ( false === false)// 2 E
//**************** 


//************ 
Operators
//************ 
< less than
> greater than
<= less than or equal to
>= greater than or equal to

PEMDAS: parenthesis, exponents, multiplication, division, addition, subtraction

//***********
Logical Operators
//***********
Help evaluate multiple conditions simultaneously


|| equals (OR) If any conditon is true it will return true
true || true || true    // true
true || true || false   // true
true || false || false  // true
false || false || false // false

console.log( 'Sandwich' === 'Sandwich' || 2 === 2 ) //true
console.log( 'hotdog' === 'Sandwich' || 2 === 2 ) //true
console.log( 'hotdog' === 'Sandwich' || 2 === 3 ) //false

console.log(true || true || true)   // true
console.log(true || true || false)   // true
console.log(true || false || false)  // true
console.log(false || false || false) // false


&& equals (AND) All conditions must be true to return true

true && true   // true
true && false  // false
false && false // false


console.log('sandwich' === 'sandwich' && 2 === 2) // true
console.log('hotdog' === 'sandwich' && 2 === 2)   // false
console.log('hotdog' === 'sandwich' && 4 === 5)   // false

console.log(true && true && true)    // true
console.log(true && true && false)   // false
console.log(true && false && false)  // false
console.log(false && false && false) // false

//*********************
The Not Operator
//*********************
The not (!) operator, also known as the bang operator, flips a true expression to the boolean value of false, and vice-versa.

!false  // true
!true   // false

When used with equality operators  syntax is flipped
3 !== 4   // true, 3 isn't equal to 4
3 !== 3   // false, 3 is equal to 3
*/