const pokemons = [
    {starter: true, name: "Pikachu", age: 10},
    {starter: true, name: "charmander", age: 20},
    {starter: true, name: "bulbasuar", age: 30},
    {starter: true, name: "squirtle", age: 40},
]

// find the pokemon w the stater value as true
console.log(pokemons.find(v => v.starter === true))

//adding up all the ages of the pokemon uing a variable using sumOfAges
//starting that off at 0
//then using the .forEach method to go through each of the elements in the area
//and adding them into our sum of ages

let sumOfAges = 0
pokemons.forEach(function(v){
    sumOfAges += v.age
})

console.log(sumOfAges)

/*
**.reduce method **
this method iterarates through each element in the array and returns the accumlated value

the reduce method takes in a callback function (like every iterator method)

and unlike every iterator method, initializes the accumaltor value.

in the call back function the accumulator is a parameter that represent the accumlated value.

if nothing is return will be undefined therefore we must return a value

the second is the current value much like the other iterator methods that we've learned.

The third optional is index  (just like the others except its in the third position)

The third optional is arr  (just like the others except its in the fourth position)
*/


//here an example of summing up all of the ages using reduce
let sumOfAgesUsingReduce = pokemons.reduce((accumulator, currentValue) => {
    // console.log(accumulator)
    console.log(currentValue)
    accumulator += currentValue.age
    
    return accumulator
},0)

console.log(sumOfAgesUsingReduce)

//CAN ALSO USE FOR EACH


pokemons.forEach(v => {
    sumOfAges += v.age
})

console.log(sumOfAges)

//here is an example of contanating all the name of the pokemons together
let concatationOfNames = pokemons.reduce((accumulator, currentValue) => {
    accumulator += currentValue.name
    return accumulator
},'')

console.log(concatationOfNames)

//getting all starters using .filter
const starters = pokemons.filter(v => {
    return v.starter === true
})
console.log(starters)

//getting all starters using the variable + for loop way
let a = []
for(let i = 0; i < pokemons.length; i++){
    console.log(pokemons[i])
    if(pokemons[i].starter === true){
        a.push(pokemons[i])
    }
}
console.log(a)

//getting all starters using the .reduce
const starterReduce = pokemons.reduce((acc, v) => {
    if(v.starter === true){
        acc.push(v)
    }
    return acc;
},[])
console.log(starterReduce)