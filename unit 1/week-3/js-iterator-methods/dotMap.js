/*
**********
Map Method
**********
*/

const movies = ['titanic', 'matrix', 'batman']

const newMovies = movies.map(function(val){
    return `${val} is good`
})

console.log(newMovies)

const nums = [5,10,15000]
const squared = nums.map(function(num){
    return num*num
})
console.log(nums)
console.log(squared)

const movies = ['titanic', 'matrix', 'batman']

const newMovies = movies.map(function(val){
    return `${val} is good`
})

console.log(newMovies)


const nums = [1,2,3]
const squared = nums.map(function(num){
    return num * num
})

console.log(squared)



const names = ['david', 'denis', 'joy']
//the goal is to get an array of object with a name property and age property. 
//the age property will have a value that is equal to the index value

const namesTwo = names.map(function(v, index){
    return { name: v, age: index}
})

const namesTwoArrow = names.map((v, index) => {
    return { name: v, age: index}
})

console.log(namesTwo)